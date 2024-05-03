import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Index";
import useGifs from "../../hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
