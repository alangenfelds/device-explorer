import React from 'react';

import closeIconUrl from '../assets/clearIcon.svg';
import { useGlobalContext } from '../app/GlobalContext';

type Props = {
  closeFilters: () => void;
};

const FilterMenu = ({ closeFilters }: Props) => {
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
        <div className="pb-8">
          {productLines.map((line) => (
            <div key={line.id} className="flex items-center h-8">
              <input
                id={line.id}
                type="checkbox"
                value=""
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
