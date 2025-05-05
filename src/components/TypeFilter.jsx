import React from 'react';

const TypeFilter = ({ selectedType, onTypeChange, types }) => {
  return (
    <div className="w-full sm:w-60">
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="w-full p-2 rounded-md border-2 border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-700"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            <li className='bg-teal-400'>
            {type.charAt(0).toUpperCase() + type.slice(1)}
            </li>
            
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
