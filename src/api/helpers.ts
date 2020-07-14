export const fetchAPI = () =>
  fetch("https://restcountries.eu/rest/v2/all").then((response) =>
    response.json()
  );
