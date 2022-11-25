import React from 'react';

import searchIconUrl from '../assets/Search-icon.svg';
import clearIconUrl from '../assets/clearIcon.svg';

type Props = {
  search: string;
  setSearch: (val: string) => void;
};

const Search = ({ search, setSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
          className="w-[344px] h-8 bg-[#F6F6F8] text-gray-900 text-sm rounded-sm focus:ring-0 focus:ring-offset-0 block  pl-10 p-2.5"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
        {search && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setSearch('')}
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
