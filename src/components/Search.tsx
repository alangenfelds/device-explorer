import React from 'react';

import searchIconUrl from '../assets/Search-icon.svg';
import clearIconUrl from '../assets/clearIcon.svg';
import { useGlobalContext } from '../app/GlobalContext';

const Search = () => {
  const { searchValue, handleSearchInputChange } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchInputChange(e.target.value);
  };

  return (
    <form>
      <label htmlFor="device-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <img
            src={searchIconUrl}
            alt="search"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </div>
        <input
          type="text"
          id="device-search"
          className="focus:ring-0 border-none w-[344px] h-8 bg-[#F6F6F8] text-sm rounded-sm block pl-10 p-2 placeholder:text-black/50"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
        />
        {searchValue && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => handleSearchInputChange('')}
          >
            <img
              src={clearIconUrl}
              alt="clear"
              className="w-4 h-4 text-gray-500  hover:text-gray-900"
            />
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
