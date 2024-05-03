const apikey = "eAUAOajbs6HB97IwVtEXSc7An3y5YsV5";
const apikey2 = "pZgFFmOcHcMrSgnXXiuSMSaTKmkQTHYq";
const numGifs = 10;
const raiting = ["g", "pg", "pg-13", "r"];
//cambiar apikey si caduca o sobrepasas los request

export default function getGifs({ keyword }) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=
${apikey}&q=${keyword}&limit=${numGifs}&offset=0&rating=${raiting[0]}&lang=es&bundle=messaging_non_clips`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifsurl = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.original;

        //console.log(gifsurl)
        return { title, id, url };
      });
      return gifsurl;
    });
}
