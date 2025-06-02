import React from 'react';
import { useAnimals } from '../../context/AnimalsContext';
import AnimalCard from './AnimalCard';

const SearchResults = () => {
  const { searchResults, searchQuery } = useAnimals();

  if (!searchResults) return null;

  return (
    <div id="search-results" className="container mt-4">
      <hr className="my-4" />
      <h3 className="text-center mb-3">Resultados da Busca por "{searchQuery}"</h3>
      {searchResults.length > 0 ? (
        <div className="row">
          {searchResults.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <p className="text-center">Nenhum resultado encontrado para sua busca.</p>
      )}
    </div>
  );
};

export default SearchResults;
