import env from "react-dotenv";

const BASE_URL_ML = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const BASE_URL_BSCP = env.REACT_APP_LINK_API_BUSCAPE;

const switchAPI = async (web, category, searchTerm) => {
  console.log('cheguei no switchAPI')
  let results = [];

  if (web === 'Mercado Livre') {
    results = await fetch(`${BASE_URL_ML}${category}+${searchTerm}`)
      .then((response) => response.json())
      .then((data) => data.results)
  }

  if (web === 'Buscapé') {
    console.log('BASE_URL_BSCP', BASE_URL_BSCP)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, searchTerm })
    };

    results = await fetch(BASE_URL_BSCP, requestOptions)
      .then((response) => response.json())
      .then((data) => data)
  }

  console.log(`results no switchAPI: `, results)
  return results;
};

export default switchAPI;
