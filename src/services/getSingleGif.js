import { API_KEY, API_URL, RAITING } from "./settings";
import { fromApiUrlToSingleGif } from "../hooks/useApiUrl";

export default function getSingleGif({ id }) {
  const apiUrl = `${API_URL}${id}?api_key=${API_KEY}&rating=${RAITING[0]}`;

  return fromApiUrlToSingleGif(apiUrl);
}
