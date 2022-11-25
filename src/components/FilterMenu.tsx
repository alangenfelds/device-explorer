import React, { ChangeEvent } from 'react';

import closeIconUrl from '../assets/clearIcon.svg';
import { useGlobalContext } from '../app/GlobalContext';

type Props = {
  closeFilters: () => void;
  activeFilters: string[];
  handleFilterSelect: (val: ChangeEvent<HTMLInputElement>) => void;
};

const FilterMenu = ({
  closeFilters,
  activeFilters,
  handleFilterSelect,
}: Props) => {
  const { productLines } = useGlobalContext();
  return (
    <div className="absolute top-14 right-0 w-64 bg-white filters-box font-lato">
      <div className="w-full h-14 border-b-[1px] border-[##DBDCE1] flex items-center justify-between px-6">
        <div className="text-black/70">Filter</div>
        <div className="cursor-pointer opacity-70" onClick={closeFilters}>
          <img src={closeIconUrl} alt="close" className="w-5 h-5" />
        </div>
      </div>
      <div className="w-full flex flex-col px-6">
        <div className="h-16 font-bold flex items-center">Product line</div>
        <div className="pb-8 max-h-[500px] overflow-y-auto">
          {productLines.map((line) => (
            <div key={line.id} className="flex items-center h-8">
              <input
                id={line.id}
                type="checkbox"
                checked={activeFilters.includes(line.id)}
                onChange={handleFilterSelect}
                className="w-4 h-4 rounded-[4px] border-gray-300 hover:cursor-pointer  
                text-[#006FFF]
                focus:border-indigo-300/90
                focus:ring-0
                focus:ring-white
                focus:ring-opacity-90
              "
              />
              <label
                htmlFor={line.id}
                className="ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer"
              >
                {line.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
