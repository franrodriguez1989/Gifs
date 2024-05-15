import React, { useCallback, useEffect, useRef } from "react"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import Spinner from "../../components/Spinner/Index"
import useGifs from "../../hooks/useGifs"
import "./style.css"
import useNearScreen from "../../hooks/useNearScreen"
import debounce from "just-debounce-it"
import useTitle from "../../hooks/useSEO"
import { Helmet } from "react-helmet"

export default function SearchResult({ params: { keyword } }) {
  //Esta forma de desestructurar el objeto params, es la alternativa a {params} y despues const {keyword}= params
  const { loading, loadingNextPage, gifs, setPages } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })
  const title = gifs ? `Gifs de ${keyword}` : ""

  const debounceHandleNextPage = useCallback(
    debounce(() => setPages((prevpages) => prevpages + 1), 50),
    []
  )

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage()
    },
    [debounceHandleNextPage, isNearScreen]
  )
  //En Helmet se puede usar tanto <meta></meta> como <meta/>
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Busqueda de ${title}`}></meta>
        <meta name="raiting" content="General" />
      </Helmet>
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
  )
}
