import { useEffect, useState } from "react"
import useGifs from "./useGifs"
import getSingleGif from "../services/getSingleGif"

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const [gif, setGif] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(
    function () {
      const gifFromCache = gifs.find((singleGif) => singleGif.id === id)
      if (gifFromCache) {
        setGif(gifFromCache)
      } else {
        setIsLoading(true)
        getSingleGif({ id })
          .then((gif) => {
            setGif(gif)
            setIsLoading(false)
          })
          .catch(() => {
            setIsLoading(false)
            setIsError(true)
          })
      }
    },
    [gifs, id]
  )
  return { gif, isLoading, isError }
}
