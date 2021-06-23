import env from "react-dotenv";

const BASE_URL_ML = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const BASE_URL_BSCP = env.REACT_APP_LINK_API_BUSCAPE;

const switchAPI = async (web, category, searchTerm) => {
  let results = [];

  if (web === 'Mercado Livre') {
    results = await fetch(`${BASE_URL_ML}${category}+${searchTerm}`)
      .then((response) => response.json())
      .then((data) => data.results)
  }

  if (web === 'Buscapé') {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, searchTerm })
    };

    results = await fetch(BASE_URL_BSCP, requestOptions)
      .then((response) => response.json())
      .then((data) => data)
  }

  return results;
};

export default switchAPI;
