import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Index";
import TrendingSearches from "../../components/TrendingSearches";
import "./style.css";
import SearchForm from "../../components/SearchForm";
import { useCallback } from "react";

export default function Home() {
  //    const [path, pushLocation] = useLocation() se puede adquirir solo la parte que vamos a usar.
  const pushLocation = useLocation()[1];
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      //navegar a otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className="ultimaBusqueda">
        <h1>busqueda</h1>
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
      <div className="tendencias">
        <h3>Gifs populares</h3>
        {loading ? <Spinner /> : <TrendingSearches />}
      </div>
    </>
  );
}
