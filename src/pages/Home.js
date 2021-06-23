import React, { useContext, useEffect } from 'react';
import { saveFilter } from '../services/helpers';
import Context from '../context/Context';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { web, category, searchTerm, results } = useContext(Context);
  const emptyResults = results.length === 0;

  useEffect(() => {
    if (!emptyResults) {
      saveFilter(web, category, searchTerm, results);
    }
  }, [results])

  return (
    <div style={ { height: '100%', backgroundColor: 'rgb(33, 33, 33)' } }>
      <Header title='Buskeakki'/>
      <SearchBox />
      { !emptyResults && <ProductCard /> }
    </div>
  );
}

export default Home;
