import React from 'react';
import logoUrl from '../assets/Ubiquiti_logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar h-14 flex items-center w-full justify-between bg-[#F6F6F8] pr-6 font-lato">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="logo" className="object-contain w-14 h-14" />
          <div className="text-[#838691] text-xl ">Devices</div>
        </div>
        <div className="text-black/60">by Arturs Langenfelds</div>
      </nav>
    </header>
  );
};

export default Header;
