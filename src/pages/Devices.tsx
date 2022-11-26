import React, { useState, useEffect, ChangeEvent } from 'react';

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

const Devices = () => {
  const { devices, error, isLoading } = useGlobalContext();

  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  console.log('isLoading', isLoading);
  console.log('error', error);

  useEffect(() => {
    if (searchValue && activeFilters.length) {
      const filtered = devices.filter(
        (device) =>
          device.product.name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) &&
          activeFilters.includes(device.line.id)
      );
      setFilteredDevices(filtered);
    } else if (searchValue) {
      const filtered = devices.filter((device) =>
        device.product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDevices(filtered);
    } else if (activeFilters.length) {
      const filtered = devices.filter((device) =>
        activeFilters.includes(device.line.id)
      );
      setFilteredDevices(filtered);
    } else {
      setFilteredDevices(devices);
    }
  }, [searchValue, activeFilters, devices]);

  const handleCloseFilters = () => {
    setShowFilters(false);
  };

  const handleFilterSelect = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>
      <div className="sticky top-0 flex w-full justify-between items-center px-6 h-12 border-b-[1px] border-t-[1px] bg-white">
        <Search search={searchValue} setSearch={setSearchValue} />
        <div className="flex items-center gap-x-3 select-none">
          <div
            className="cursor-pointer"
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
          {showFilters && (
            <FilterMenu
              closeFilters={handleCloseFilters}
              activeFilters={activeFilters}
              handleFilterSelect={handleFilterSelect}
            />
          )}
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
