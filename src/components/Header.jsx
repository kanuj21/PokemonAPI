import React from 'react';
import logo from '/pokeapi.png';

const Header = () => {
  return (
    <header className="bg-teal-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className='flex flex-row gap-4'>
          <img className='w-20 ' src={logo} alt="logo" />
          <h1 className="text-2xl font-bold">Pokemon</h1>
        </div>
        <p className="text-sm hidden sm:block">Explore and search your favorite Pokémon.</p>
      </div>
    </header>
  );
};

export default Header;
