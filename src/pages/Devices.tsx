import React, { useState, useMemo } from 'react';

import listViewSelectedUrl from '../assets/list-selected.svg';
import listViewUrl from '../assets/list.svg';
import gridViewSelected from '../assets/grid-selected.svg';
import gridViewUrl from '../assets/grid.svg';

import { useGlobalContext } from '../app/GlobalContext';
import Search from '../components/Search';
import DeviceGrid from '../components/DeviceGrid';
import DeviceList from '../components/DeviceList';
import FilterMenu from '../components/FilterMenu';
import { Device } from '../types/Device';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Devices = () => {
  const {
    devices,
    activeFilters,
    searchValue,
    error,
    isLoading,
    isGridLayout,
    setIsGridLayout,
  } = useGlobalContext();

  const [showFilters, setShowFilters] = useState(false);

  const filteredDevices: Device[] = useMemo(() => {
    if (searchValue && activeFilters.length) {
      const filtered = devices.filter(
        (device) =>
          device.product.name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) &&
          activeFilters.includes(device.line.id)
      );
      return filtered;
    } else if (searchValue) {
      const filtered = devices.filter((device) =>
        device.product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      return filtered;
    } else if (activeFilters.length) {
      const filtered = devices.filter((device) =>
        activeFilters.includes(device.line.id)
      );
      return filtered;
    } else {
      return devices;
    }
  }, [searchValue, activeFilters, devices]);

  const handleCloseFilters = () => {
    setShowFilters(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <div className="sticky top-0 flex w-full justify-between items-center px-6 h-12 border-b-[1px] border-t-[1px] bg-white">
        <Search />
        <div className="flex items-center gap-x-3 select-none">
          <div
            className="cursor-pointer h-6 w-6 flex items-center justify-center"
            onClick={() => setIsGridLayout(false)}
          >
            <img
              src={isGridLayout ? listViewUrl : listViewSelectedUrl}
              alt="table view"
            />
          </div>
          <div className="cursor-pointer" onClick={() => setIsGridLayout(true)}>
            <img
              src={isGridLayout ? gridViewSelected : gridViewUrl}
              alt="grid view"
              className="hover:text-red-500 hover:fill-red-500"
            />
          </div>
          <div
            className={`text-sm text-black/40 cursor-pointer hover:text-black/60 ${
              activeFilters.length ? 'font-bold text-black/60' : ''
            }`}
            onClick={() => setShowFilters(true)}
          >
            Filter
          </div>
          {showFilters && <FilterMenu closeFilters={handleCloseFilters} />}
        </div>
      </div>
      {isGridLayout ? (
        <DeviceGrid devices={filteredDevices} />
      ) : (
        <DeviceList devices={filteredDevices} />
      )}
    </>
  );
};

export default Devices;
