const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  //nos asegurammos que la respuesta sea un array
  if (Array.isArray(data)) {
    const gifsurl = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.original;
      return { title, id, url };
    });
    return gifsurl;
  }
  return [];
};
const fromApiResponseToSingleGif = (apiresponse) => {
  const { data } = apiresponse;
  const { images, title, id } = data;
  const { url } = images.original;
  return { title, id, url };
};

function fromApiUrlToApiResponse(apiUrl) {
  return fetch(apiUrl).then((res) => res.json());
}

export function fromApiUrlToGifs(apiUrl) {
  return fromApiUrlToApiResponse(apiUrl).then(fromApiResponseToGifs);
}
export function fromApiUrlToSingleGif(apiUrl) {
  return fromApiUrlToApiResponse(apiUrl).then(fromApiResponseToSingleGif);
}
