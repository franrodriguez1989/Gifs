import { Link } from "wouter";
import {useState} from 'react';
export default function Home(){
    const GifsMostrar = ['Vinicius', 'Bellingham', 'Mbappe'].map(jugador => (
        <Link key={jugador} to={`/search/${jugador}`}>Gifs de {jugador}</Link>
    ))
   const [keyword, setkeyword] = useState('')
    return (<>
        <form>
            <label for='busqueda'>Introduzca nombre de Gif: </label><br></br>
            <input type='text' id='busqueda' value={keyword}/>

        </form>
        <h1>Los Gifs mas populares</h1>
        {GifsMostrar}
        </>)
}
