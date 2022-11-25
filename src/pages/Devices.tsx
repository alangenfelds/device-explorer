import React, { useState } from 'react';

import listViewSelectedUrl from '../assets/list-selected.svg';
import listViewUrl from '../assets/list.svg';
import gridViewSelected from '../assets/grid-selected.svg';
import gridViewUrl from '../assets/grid.svg';

import { useGlobalContext } from '../app/GlobalContext';
import Search from '../components/Search';
import DeviceGrid from '../components/DeviceGrid';
import DeviceList from '../components/DeviceList';

const Devices = () => {
  const { devices, error, isLoading } = useGlobalContext();
  const [isGridLayout, setIsGridLayout] = useState(false);

  const [search, setSearch] = useState('');

  console.log('isLoading', isLoading);
  console.log('error', error);
  console.log('devices', devices);
  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center px-6 h-14 border-b-[1px]">
        <Search search={search} setSearch={setSearch} />
        <div className="flex items-center gap-x-3">
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
          <div className="text-sm text-black/40 cursor-pointer hover:text-black/60">
            Filter
          </div>
        </div>
      </div>
      {isGridLayout ? (
        <DeviceGrid devices={devices} />
      ) : (
        <DeviceList devices={devices} />
      )}
    </div>
  );
};

export default Devices;
