import { useState, useRef, useEffect } from "react";

export default function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (entries, observer) => {
      const elementoObservado1 = entries[0];
      if (elementoObservado1.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
        //observer.unobserve(elementoObservado1)
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(elementRef.current);
    return () => observer && observer.disconnect();
  });
  return { isNearScreen, elementRef };
}
