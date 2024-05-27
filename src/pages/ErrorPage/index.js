import "../../components/Gif/Gif.css"
import { Link } from "wouter"

export default function ErrorPage() {
  return (
    <div>
      <h1>
        Busqueda incorrecta
        <br />
        Error
      </h1>
      <Link to={`/`} className={`Gif gif-wrapper`}>
        <h5 className="gif-title">Error 404</h5>
        <img
          alt="Error 404"
          src="https://media3.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=6452e307nfsgubj7fd0bjxi6ncek3b4ea7kfo9fag860vr4s&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
        />
      </Link>
    </div>
  )
}
