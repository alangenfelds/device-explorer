import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';

import { Device, DevicesResponse, Line } from '../types/Device';

interface GlobalContextProps {
  devices: Device[];
  deviceMap: Record<string, Device>;
  productLines: Line[];
  activeFilters: string[];
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFilters: () => void;
  searchValue: string;
  handleSearchInputChange: (val: string) => void;
  isLoading: boolean;
  isGridLayout: boolean;
  setIsGridLayout: (val: boolean) => void;
  error?: useFetch.UseFetchError;
}

const BASE_URL = 'https://static.ui.com/fingerprint/ui/public.json';

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

export const GlobalContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { isLoading, data, error } = useFetch<DevicesResponse>(BASE_URL);

  const [devices, setDevices] = useState<Device[]>([]);

  const [deviceMap, setDeviceMap] = useState<Record<string, Device>>({});

  const [productLines, setProductLines] = useState<Line[]>([]);

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const [isGridLayout, setIsGridLayout] = useState(false);

  const handleFilterSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = e.target.id;

    let updatedFilters: string[] = [];

    if (activeFilters.includes(selectedFilter)) {
      updatedFilters = [
        ...activeFilters.filter((item) => item !== selectedFilter),
      ];
    } else {
      updatedFilters = [...activeFilters, selectedFilter];
    }

    setActiveFilters(updatedFilters);
  };

  const removeFilters = () => {
    setActiveFilters([]);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (data && data.devices && data.devices.length) {
      setDevices(data.devices);

      const prodLines: Line[] = [];
      const devMap: Record<string, Device> = {};

      data.devices.map((device) => {
        if (!prodLines.find((line) => line.id === device.line.id)) {
          prodLines.push(device.line);
        }

        devMap[device.model_id] = device;
        setDeviceMap(devMap);
      }, []);

      setProductLines(prodLines);
    }
  }, [data]);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        error,
        devices,
        deviceMap,
        productLines,
        activeFilters,
        handleFilterSelect,
        removeFilters,
        searchValue,
        handleSearchInputChange,
        isGridLayout,
        setIsGridLayout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
