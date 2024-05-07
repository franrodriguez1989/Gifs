import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifsService";
import GifsContext from "../context/GifsContext";

const InitialPage = 0;
//recordatorio { keyword = null } = {} tambien es aceptable. Si dejamos solo { keyword = null } y llamamos a la funcion sin argumentos el valor sera indefenido.
export default function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [pages, setPages] = useState(InitialPage);

  /* const keywordToUse =
    keyword || localStorage.getItem("lastkeyword") || "Realmadrid";
  const gifs = getGifs({ keyword: keywordToUse }).then((gifs) => {
    return gifs;
  }); */
  const keywordToUse =
    keyword || localStorage.getItem("lastkeyword") || "Realmadrid";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      if (keyword) {
        localStorage.setItem("lastkeyword", keyword);
      }
    });
  }, [keyword, keywordToUse]);
  useEffect(() => {
    if (pages === InitialPage) return;

    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, pages }).then((nextGifs) => {
      setGifs((previusGifs) => previusGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, pages, setGifs]);

  return { loading, loadingNextPage, gifs, setPages };
}
