export const numberFormat = (value) =>
new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(value);

export const saveFilter = async (web, category, searchTerm, results) => {
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

export const checkFilter = async (web, category, searchTerm) => {
  const BASE_URL_API = process.env.REACT_APP_LINK_API;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ web, category, searchTerm })
  };

  const results = await fetch(`${BASE_URL_API}/filter`, requestOptions)
    .then((response) => response.json())
    .then((data) => data.results);

  return results;
};
