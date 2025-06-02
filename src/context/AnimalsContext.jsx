import React, { createContext, useState, useContext } from 'react';
import { animaisData } from '../data/animaisData';

// Criando o contexto de animais
const AnimalsContext = createContext();

// Hook personalizado para usar o contexto de animais
export const useAnimals = () => useContext(AnimalsContext);

// Provedor do contexto de animais
export const AnimalsProvider = ({ children }) => {
  const [animals, setAnimals] = useState(animaisData);
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Função para buscar animais
  const searchAnimals = (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      setSearchQuery('');
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const results = animals.filter(animal => 
      animal.nome.toLowerCase().includes(lowercaseQuery) ||
      animal.especie.toLowerCase().includes(lowercaseQuery) ||
      animal.raca.toLowerCase().includes(lowercaseQuery) ||
      animal.descricao.toLowerCase().includes(lowercaseQuery)
    );

    setSearchResults(results);
    setSearchQuery(query);
  };

  // Função para limpar resultados da busca
  const clearSearch = () => {
    setSearchResults(null);
    setSearchQuery('');
  };

  return (
    <AnimalsContext.Provider value={{ 
      animals, 
      searchResults, 
      searchQuery, 
      searchAnimals, 
      clearSearch 
    }}>
      {children}
    </AnimalsContext.Provider>
  );
};

export default AnimalsContext;
