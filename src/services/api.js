const BASE_URL_ML = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const BASE_URL_BSCP = 'https://api.mercadolibre.com/sites/MLA/search?q=';

const switchAPI = (web, category, searchTerm) => {
  let results = [];

  if (web === 'Mercado Livre') {
    results = fetch(`${BASE_URL_ML}${category}+${searchTerm}`)
      .then((response) => response.json())
      .then((data) => data.results)
  }

  if (web === 'Buscapé') {
    results = fetch(`${BASE_URL_BSCP}${category}+${searchTerm}`)
      .then((response) => response.json())
      .then((data) => data.results)
  }

  return results;
};

export default switchAPI;
