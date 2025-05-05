// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';

// const usePokemonData = () => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [typesSet, setTypesSet] = useState(new Set());
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get(POKEMON_API_URL);
//         const results = response.data.results;

//         const detailedData = await Promise.all(
//           results.map(async (pokemon) => {
//             const res = await axios.get(pokemon.url);
//             const { id, name, sprites, types } = res.data;

//             // Extract and collect types
//             types.forEach((t) => typesSet.add(t.type.name));

//             return {
//               id,
//               name,
//               image: sprites.front_default,
//               types: types.map((t) => t.type.name),
//             };
//           })
//         );

//         setPokemonList(detailedData);
//         setTypesSet(new Set(detailedData.flatMap(p => p.types)));
//       } catch (err) {
//         setError('Failed to load Pokémon data. Please try again later.');
//       }

//       setLoading(false);
//     };

//     fetchPokemonData();
//   }, []);

//   return { pokemonList, types: Array.from(typesSet).sort(), loading, error };
// };

// export default usePokemonData;


import { useEffect, useState } from 'react';
import axios from 'axios';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';

const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [typesSet, setTypesSet] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(POKEMON_API_URL);
        const results = response.data.results;

        const detailedData = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            const { id, name, sprites, types, stats } = res.data;

            // Extract and collect types
            types.forEach((t) => typesSet.add(t.type.name));

            return {
              id,
              name,
              image: sprites.front_default,
              types: types.map((t) => t.type.name),
              stats, // ✅ include stats
            };
          })
        );

        setPokemonList(detailedData);
        setTypesSet(new Set(detailedData.flatMap(p => p.types)));
      } catch (err) {
        setError('Failed to load Pokémon data. Please try again later.');
      }

      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  return { pokemonList, types: Array.from(typesSet).sort(), loading, error };
};

export default usePokemonData;
