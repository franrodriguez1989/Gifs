import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifsService";
import GifsContext from "../context/GifsContext";

const InitialPage = 0;
//recordatorio { keyword = null } = {} tambien es aceptable. Si dejamos solo { keyword = null } y llamamos a la funcion sin argumentos el valor sera indefenido.
export default function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(InitialPage);

  /* const keywordToUse =
    keyword || localStorage.getItem("lastkeyword") || "Realmadrid";
  const gifs = getGifs({ keyword: keywordToUse }).then((gifs) => {
    return gifs;
  }); */

  useEffect(() => {
    setLoading(true);

    const keywordToUse =
      keyword || localStorage.getItem("lastkeyword") || "Realmadrid";

    getGifs({ keyword: keywordToUse, pages }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      if (keyword) {
        localStorage.setItem("lastkeyword", keyword);
      }
    });
  }, [keyword, pages, setGifs]);

  return { loading, gifs, pages, setPages };
}
