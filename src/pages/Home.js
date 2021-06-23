import React, { useContext, useEffect, useState } from 'react';
import { saveFilter } from '../services/helpers';
import Context from '../context/Context';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { web, category, searchTerm, results } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(`results no Home: `, results)
    const emptyResults = results.length === 0;

    if (!emptyResults) {
      saveFilter(web, category, searchTerm, results);
      setLoading(false);
      return;
    }

    setLoading(true)
  }, [results])

  return (
    <div style={ { height: '100%', backgroundColor: 'rgb(33, 33, 33)' } }>
      <Header title='Buskeakki'/>
      <SearchBox />
      { !loading && <ProductCard /> }
    </div>
  );
}

export default Home;
