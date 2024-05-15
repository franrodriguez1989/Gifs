import { useEffect, useRef } from "react"

export default function useTitle({ description, title }) {
  const titleRef = useRef(document.title)
  const descriptionRef = useRef(
    document.querySelector('meta[name="description"]')
  )

  useEffect(() => {
    const previousTitle = titleRef.current

    if (title) {
      document.title = `${title} | Giffy`
    }

    return () => (document.title = previousTitle)
  }, [title])

  useEffect(() => {
    const previousDescription = descriptionRef.current.getAttribute("content")

    if (description) {
      descriptionRef.current.setAttribute("content", description)
    }
    return () =>
      descriptionRef.current.setAttribute("content", previousDescription)
  }, [description])
}
