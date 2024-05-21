import React, { useCallback, useEffect, useRef } from "react"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import Spinner from "../../components/Spinner/Index"
import useGifs from "../../hooks/useGifs"
import "./style.css"
import useNearScreen from "../../hooks/useNearScreen"
import debounce from "just-debounce-it"
import { Helmet } from "react-helmet"
import SearchForm from "../../components/SearchForm"

export default function SearchResult({ params: { keyword, raiting } }) {
  //destructuring alt const {keyword} = params

  const { loading, loadingNextPage, gifs, setPages } = useGifs({
    keyword,
    raiting,
  })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })
  const title = gifs ? `Resultados de ${keyword}` : ""

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
  //Helmet use <meta></meta> or <meta/>
  console.log(`loading: ${loading}`)
  console.log(`loadingNextPage: ${loadingNextPage}`)
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Busqueda de ${title}`}></meta>
        <meta name="raiting" content="General" />
      </Helmet>
      <header>
        <SearchForm
          initialKeyword={keyword}
          initialRaiting={raiting}
          initialTimes={1}
        />
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="header">
            <h3>Gifs de: {keyword}</h3>
          </div>
          <ListOfGifs gifs={gifs} />
          {loadingNextPage ? <Spinner /> : null}
        </>
      )}
      <div id="chivato" ref={externalRef}></div>
    </>
  )
}
