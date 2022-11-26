import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { Device, DevicesResponse, Line } from '../types/Device';

interface GlobalContextProps {
  devices: Device[];
  deviceMap: Record<string, Device>;
  productLines: Line[];
  isLoading: boolean;
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
