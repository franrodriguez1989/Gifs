import { API_KEY, API_URL, RAITINGS } from "./settings.js"

export default function getSingleGif({ id }) {
  const apiUrl = `${API_URL}${id}?api_key=${API_KEY}&rating=${RAITINGS[0]}`

  const singleGif = fetch(apiUrl)
    .then((res) => res.json())
    .then((apiResponse) => {
      const { data } = apiResponse
      const { images, title, id } = data
      const { url } = images.original
      return { title, id, url }
    })

  return singleGif
}
