import { API_KEY2 } from "./settings";

const raiting = ["g", "pg", "pg-13", "r"];

//cambiar apikey si caduca o sobrepasas los request

export default function getTrendingTerms() {
  const apiUrl = `https://api.giphy.com/v1/trending/searches?api_key=
${API_KEY2}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;

      return data;
    });
}
