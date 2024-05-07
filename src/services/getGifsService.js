import { API_KEY2 } from "./settings";

const raiting = ["g", "pg", "pg-13", "r"];

//cambiar apikey si caduca o sobrepasas los request

export default function getGifs({
  keyword = "Realmadrid",
  limit = 10,
  pages = 0,
}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=
${API_KEY2}&q=${keyword}&limit=${limit}&offset=${pages * limit}
&rating=${raiting[0]}&lang=es&bundle=messaging_non_clips`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      //nos asegurammos que la respuesta sea un array
      if (Array.isArray(data)) {
        const gifsurl = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.original;

          //console.log(gifsurl)
          return { title, id, url };
        });
        return gifsurl;
      }
      return [];
    });
}
