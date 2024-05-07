import { useLocation } from "wouter";
import { useState } from "react";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Index";
import TrendingSearches from "../../components/TrendingSearches";
import "./style.css";

export default function Home() {
  const [keyword, setkeyword] = useState("");
  //    const [path, pushLocation] = useLocation() se puede adquirir solo la parte que vamos a usar.
  const pushLocation = useLocation()[1];
  const { loading, gifs } = useGifs();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setkeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-container">
          <input
            placeholder="Buscar Gifs"
            onChange={handleChange}
            type="text"
            id="busqueda"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Buscar
          </button>
        </div>
      </form>
      <div className="ultimaBusqueda">
        <h1>Ultima busqueda</h1>
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
      <h3>Gifs populares</h3>
      <TrendingSearches />
    </>
  );
}
