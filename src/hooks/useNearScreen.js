import { useState, useRef, useEffect } from "react"

export default function useNearScreen({
  distance = "150px",
  externalRef = null,
  once = true,
} = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const elementRef = useRef()

  useEffect(function () {
    const element = externalRef ? externalRef.current : elementRef.current
    const onChange = (entries, observer) => {
      const elementoObservado1 = entries[0]
      if (elementoObservado1.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
        //observer.unobserve(elementoObservado1)
      } else {
        !once && setIsNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    if (element) observer.observe(element)
    return () => observer && observer.disconnect()
  })
  return { isNearScreen, elementRef }
}
