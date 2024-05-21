import useGifs from "../../hooks/useGifs"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import Spinner from "../../components/Spinner/Index"
import TrendingSearches from "../../components/TrendingSearches"
import "./style.css"
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"

export default function Home() {
  const { loading, gifs } = useGifs()
  console.log(`loading: ${loading}`)
  return (
    <>
      <Helmet>
        <title>Home | Buscador Gifs</title>
      </Helmet>
      <header>
        <SearchForm />
      </header>

      <div className="ultimaBusqueda">
        <h1>Última búsqueda</h1>
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
      <div className="tendencias">
        <h3>Gifs populares</h3>
        {loading ? <Spinner /> : <TrendingSearches />}
      </div>
    </>
  )
}
