import React from 'react';
import logoUrl from '../assets/Ubiquiti_logo.png';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="navbar h-14 flex items-center w-full justify-between bg-[#F6F6F8] pr-6 font-lato">
        <div className="flex items-center gap-2">
          <div className="object-contain w-14 h-14">
            <img src={logoUrl} alt="logo" />
          </div>
          <div className="text-[#838691] text-xl ">Devices</div>
        </div>
        <div className="text-black/60">by Arturs Langenfelds</div>
      </nav>
    </header>
  );
};

export default Header;
