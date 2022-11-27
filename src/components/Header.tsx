import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoUrl from '../assets/Ubiquiti_logo.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar h-14 flex items-center w-full justify-between bg-[#F6F6F8] pr-6 font-lato">
        <div className="flex items-center gap-2">
          <img
            src={logoUrl}
            alt="logo"
            className="object-contain w-14 h-14 cursor-pointer"
            onClick={() => navigate('/')}
          />
          <div className="text-[#838691] text-xl ">Devices</div>
        </div>
        <a
          href="https://portfolio-nextjs-arturlan.vercel.app/"
          target="_blank"
          className="text-black/60"
        >
          by Arturs Langenfelds
        </a>
      </nav>
    </header>
  );
};

export default Header;
