import React from "react"
import Gif from "../../components/Gif/Gif"
import BackButton from "../../components/Backbutton"
import useSingleGif from "../../hooks/useSingleGif"
import Spinner from "../../components/Spinner/Index"
import { Redirect } from "wouter"
import { Helmet } from "react-helmet"

export default function Detail({ params: { id } }) {
  const { gif, isLoading, isError } = useSingleGif({ id })
  const title = gif ? gif.title : ""
  //useTitle({ description: `Detail of ${title}`, title })

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to="/404" />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title> {title} </title>
      </Helmet>
      <h3>{gif.title}</h3>
      <Gif className="gifdetail" {...gif} />
      <BackButton />
    </>
  )
}
