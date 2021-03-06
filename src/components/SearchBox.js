import React, { useContext } from 'react';
import Context from '../context/Context';
import switchAPI from '../services/api';
import { checkFilter } from '../services/helpers';
import { stateAPIs, stateCategories } from '../services/seeds';

import { Dropdown, Icon, Input, Container } from 'semantic-ui-react';

import './Components.css';

function SearchBox() {
  const {
    web,
    setWeb,
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
    setResults,
 } = useContext(Context);

  const handleFilter = async (web, category, searchTerm) => {
    const filterResults = await checkFilter(web, category, searchTerm);

    if (filterResults) {
      return setResults(filterResults)
    }

    const productResults = await switchAPI(web, category, searchTerm);

    await setResults(productResults);
  };

  return (
    <Container fluid className="search-container" textAlign="center">
      <Dropdown
        className="search-input"
        id='api'
        placeholder='Web'
        search
        selection
        options={ stateAPIs }
        onChange={ (e) => setWeb(e.target.innerText) }
      />

      <Dropdown
        className="search-input"
        id='category'
        placeholder='Categoria'
        search
        selection
        options={ stateCategories }
        onChange={ (e) => setCategory(e.target.textContent) }
      />

      <Input
        icon={
          <Icon
            name='search'
            inverted
            circular
            link
            onClick={ (e) => handleFilter(web, category, searchTerm) }
          />
        }
        className="search-input"
        placeholder='O que está buscando?'
        value={ searchTerm }
        onChange={ (e) => setSearchTerm(e.target.value)}
      />
    </Container>
  )
};

export default SearchBox;
