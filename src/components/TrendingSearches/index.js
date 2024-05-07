import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "../Spinner/Index";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, elementRef } = useNearScreen();

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
}
