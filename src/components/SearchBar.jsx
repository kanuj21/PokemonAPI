import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="w-full sm:w-72">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="🔍 Search Pokémon..."
        className="w-full p-2 rounded-md border-2 border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-700"
      />
    </div>
  );
};

export default SearchBar;
