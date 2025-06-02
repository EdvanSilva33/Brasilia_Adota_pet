import React from 'react';
import { useAnimals } from '../../context/AnimalsContext';

const SearchForm = ({ className }) => {
  const { searchAnimals } = useAnimals();
  
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim();
    searchAnimals(query);
  };

  return (
    <form className={className || "form-inline ml-2"} onSubmit={handleSearch}>
      <input 
        className="form-control mr-sm-2" 
        type="search" 
        name="query" 
        placeholder="Buscar animal..." 
        aria-label="Search" 
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
