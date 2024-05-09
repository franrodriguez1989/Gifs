import React from "react";
import Gif from "../../components/Gif/Gif";
import "../../components/Gif/Gif.css";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params: { id } }) {
  const gifs = useGlobalGifs();
  const gif = gifs.find((singleGif) => singleGif.id === id);

  //const gif = useGlobalGifs().find((singleGif) => singleGif.id === id);

  return <Gif className="gifdetail" {...gif} />;
}
