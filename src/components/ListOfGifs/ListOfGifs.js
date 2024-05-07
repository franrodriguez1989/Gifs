import Gif from "../Gif/Gif";
import "./style.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="gif-container">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
