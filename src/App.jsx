import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonCard from './components/PokemonCard';
import usePokemonData from './hooks/usePokemonData';
import Footer from './components/Footer';

const ITEMS_PER_PAGE = 20;

const App = () => {
  const { pokemonList, types, loading, error } = usePokemonData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered Pokémon based on search + type
  const filteredPokemons = useMemo(() => {
    return pokemonList.filter((pokemon) => {
      const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === '' || pokemon.types.includes(selectedType.toLowerCase());

      return matchesSearch && matchesType;
    });
  }, [pokemonList, searchTerm, selectedType]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPokemons = filteredPokemons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Reset to page 1 on filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedType]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <main className="max-w-7xl mx-auto px-4 py-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <TypeFilter selectedType={selectedType} onTypeChange={setSelectedType} types={types} />
          </div>

          {/* States */}
          {loading && <p className="text-center text-lg text-indigo-600">Loading Pokémon...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && paginatedPokemons.length === 0 && (
            <p className="text-center text-gray-500">No Pokémon match your filters.</p>
          )}

          {/* Grid of Pokémon */}
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {!loading &&
              paginatedPokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
          </div>

          {/* Pagination Controls */}
          {filteredPokemons.length > 0 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-indigo-500 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-indigo-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
      <div>
        < Footer />
      </div>
    </div>

  );
};

export default App;
