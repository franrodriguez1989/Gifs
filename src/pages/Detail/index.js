import React from "react";
import Gif from "../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";
import BackButton from "../../components/Backbutton";

export default function Detail({ params: { id } }) {
  const gifs = useGlobalGifs();
  const gif = gifs.find((singleGif) => singleGif.id === id);

  //const gif = useGlobalGifs().find((singleGif) => singleGif.id === id);

  return (
    <>
      <Gif className="gifdetail" {...gif} />
      <BackButton />
    </>
  );
}
