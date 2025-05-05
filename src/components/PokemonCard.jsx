import React from 'react';

const PokemonCard = ({ pokemon }) => {
  const { name, image, id, types, stats} = pokemon;
  console.log(pokemon)
  const hp = stats.find((s) => s.stat.name === 'hp')?.base_stat || 0;
  const attack = stats.find((s) => s.stat.name === 'attack')?.base_stat || 0;
  const defense = stats.find((s) => s.stat.name === 'defense')?.base_stat || 0;
  const speed = stats.find((s) => s.stat.name === 'speed')?.base_stat || 0;

  return (
    <div className="w-70 lg:w-70 md:w-64 rounded-xl overflow-hidden shadow-xl bg-white text-center font-sans">
      {/* Blue arc top */}
      <div className="relative bg-teal-600 h-28 rounded-b-full">
        <div className="absolute top-2 left-3 bg-white text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
          # {id}
        </div>
        <div className="absolute top-2 right-3 bg-white text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
          HP : {hp}
        </div>
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain mx-auto absolute left-1/2 transform -translate-x-1/2 -bottom-8"
        />
      </div>

      {/* Card Body */}
      <div className="pt-12 pb-6 px-4">
        <h2 className="text-xl font-bold capitalize mb-2">{name}</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {types.map((type, index) => (
            <div
              key={index}
              className="px-4 py-1 rounded-full bg-teal-600 text-white text-sm font-medium capitalize"
            >
              {type}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-around text-sm font-medium mt-4">
          <div>
            <p className="text-lg text-red-500 font-bold">{attack}</p>
            <p className='text-gray-800'>Attack</p>
          </div>
          <div>
            <p className="text-lg text-gray-500 font-bold">{defense}</p>
            <p className='text-gray-800'>Defense</p>
          </div>
          <div>
            <p className="text-lg text-green-500 font-bold">{speed}</p>
            <p className='text-gray-800'>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
