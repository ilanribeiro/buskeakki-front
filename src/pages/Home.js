import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox';
import Context from '../context/Context';

const Home = () => {
  const { web, category, searchTerm, results } = useContext(Context);
  const emptyResults = results.length === 0;

  const saveFilter = (web, category, searchTerm, results) => {
    const BASE_URL_API = process.env.REACT_APP_LINK_API;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ web, category, searchTerm, results })
    };

    fetch(BASE_URL_API, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    if (!emptyResults) {
      saveFilter(web, category, searchTerm, results);
    }
  }, [results])

  return (
    <div style={ { height: '100%', backgroundColor: 'rgb(33, 33, 33)' } }>
      <Header title='Buskeakki'/>
      <SearchBox />
      { emptyResults ? <div /> : (
        <ProductCard />
      )}
    </div>
  );
}

export default Home;
