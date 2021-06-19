import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox';

function Home() {
  return (
  <div>
    <Header />
    <SearchBox />
    <ProductCard />
  </div>
  );
}

export default Home;
