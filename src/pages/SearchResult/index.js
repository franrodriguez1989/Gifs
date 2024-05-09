import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Index";
import useGifs from "../../hooks/useGifs";
import "./style.css";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResult({ params: { keyword } }) {
  //Esta forma de desestructurar el objeto params, es la alternativa a {params} y despues const {keyword}= params
  const { loading, gifs, setPages } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  //const handleNextPage = () => setPages((prevpages) => prevpages + 1);
  // const handleNextPage = () => console.log("next pages");

  const debounceHandleNextPage = useCallback(
    debounce(() => setPages((prevpages) => prevpages + 1), 200),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="header">
            <h3>Gifs de: {keyword}</h3>
          </div>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <div id="chivato" ref={externalRef}></div>
    </>
  );
}
