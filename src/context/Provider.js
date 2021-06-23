import React, { useState } from 'react'
import Context from './Context';


const Provider = ({ children }) => {
  const [web, setWeb] = useState('');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const contextValues = {
    web,
    setWeb,
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
    results,
    setResults,
  };

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
