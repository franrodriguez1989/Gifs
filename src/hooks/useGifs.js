import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);

  /* const keywordToUse =
    keyword || localStorage.getItem("lastkeyword") || "Realmadrid";
  const gifs = getGifs({ keyword: keywordToUse }).then((gifs) => {
    return gifs;
  }); */

  useEffect(() => {
    setLoading(true);

    const keywordToUse =
      keyword || localStorage.getItem("lastkeyword") || "Realmadrid";

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      if (keyword) {
        localStorage.setItem("lastkeyword", keyword);
      }
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
}
