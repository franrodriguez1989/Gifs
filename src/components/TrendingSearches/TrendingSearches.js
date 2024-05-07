import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import { Category } from "../Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    /* getTrendingTerms().then((gifs) => setTrends(gifs));
    }, []); */ //esto es lo mismo que lo siguiente

    getTrendingTerms().then(setTrends);
  }, []);

  return <Category tendencias={trends} />;
}
