import { API_KEY, API_URL } from "./settings"
import { fromApiUrlToGifs } from "../hooks/useApiUrl"

//cambiar apikey si caduca o sobrepasas los request

export default function getGifs({
  keyword = "Realmadrid",
  limit = 10,
  pages = 0,
  raiting = "g",
}) {
  const apiUrl = `${API_URL}search?api_key=
${API_KEY}&q=${keyword}&limit=${limit}&offset=${pages * limit}
&rating=${raiting}&lang=es&bundle=messaging_non_clips`

  return fromApiUrlToGifs(apiUrl)
}
