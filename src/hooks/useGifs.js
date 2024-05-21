import { useState, useEffect, useContext } from "react"
import getGifs from "../services/getGifsService"
import GifsContext from "../context/GifsContext"

const InitialPage = 0
//recordatorio { keyword = null } = {} tambien es aceptable. Si dejamos solo { keyword = null } y llamamos a la funcion sin argumentos el valor sera indefenido.
export default function useGifs({ keyword, raiting } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [pages, setPages] = useState(InitialPage)

  const keywordToUse =
    keyword || localStorage.getItem("lastkeyword") || "Realmadrid"

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse, raiting })
      .then((gifs) => {
        setGifs(gifs)

        if (keyword) {
          localStorage.setItem("lastkeyword", keyword)
        }
      })
      .finally(() => setLoading(false))
  }, [keyword, keywordToUse, raiting, setGifs])
  useEffect(() => {
    if (pages === InitialPage) return

    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, pages, raiting })
      .then((nextGifs) => {
        setGifs((previusGifs) => previusGifs.concat(nextGifs))
      })
      .finally(() => setLoadingNextPage(false))
  }, [pages])

  return { loading, loadingNextPage, gifs, setPages }
}
