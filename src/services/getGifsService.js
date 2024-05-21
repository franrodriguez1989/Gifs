import { API_KEY, API_URL } from "./settings.js"

export default function getGifs({
  keyword = "Realmadrid",
  limit = 10,
  pages = 0,
  raiting = "g",
}) {
  const apiUrl = `${API_URL}search?api_key=
${API_KEY}&q=${keyword}&limit=${limit}&offset=${pages * limit}
&rating=${raiting}&lang=es&bundle=messaging_non_clips`

  const gifsUrl = fetch(apiUrl)
    .then((res) => res.json())
    .then((apiResponse) => {
      const { data = [] } = apiResponse
      //nos asegurammos que la respuesta sea un array
      if (Array.isArray(data)) {
        const gifsUrl = data.map((image) => {
          const { images, title, id } = image
          const { url } = images.original
          return { title, id, url }
        })
        return gifsUrl
      }
    })

  return gifsUrl
}
