import React, { useRef } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Index";
import useGifs from "../../hooks/useGifs";
import "./style.css";

export default function SearchResult({ params: { keyword } }) {
  //Esta forma de desestructurar el objeto params, es la alternativa a {params} y despues const {keyword}= params
  const { loading, gifs, pages, setPages } = useGifs({ keyword });
  const buttonPreviusRef = useRef();

  const handleNextPage = () => {
    setPages((prevpage) => prevpage + 1);
    buttonPreviusRef.current.classList.remove("invisible");
  };
  const handlePreviusPage = (evt) => {
    if (pages === 1) {
      setPages((prevpage) => prevpage - 1);
      evt.target.classList.add("invisible");
    } else {
      setPages((prevpage) => prevpage - 1);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3>Gifs de: {keyword}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <div className="botonera">
        <button
          className="invisible buttonBotonera"
          ref={buttonPreviusRef}
          onClick={handlePreviusPage}
        >
          Anterior pagina
        </button>
        {pages >= 1 ? <h5>Pag: {pages}</h5> : null}
        <button className="buttonBotonera" onClick={handleNextPage}>
          Siguiente pagina
        </button>
      </div>
    </>
  );
}
