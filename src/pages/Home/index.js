import { Link, useLocation } from "wouter";
import {useState} from 'react';
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Index";

export default function Home(){
    const GifsPopulares = ['Vinicius', 'Bellingham', 'Mbappe'].map(jugador => (
        <Link key={jugador} to={`/search/${jugador}`}>Gifs de {jugador}</Link>
    ))
   const [keyword, setkeyword] = useState('')
//    const [path, pushLocation] = useLocation() se puede adquirir solo la parte que vamos a usar.
   const pushLocation = useLocation()[1]
   const {loading, gifs}= useGifs()
   
   const handleSubmit = evt =>{
    evt.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
   } 
   const handleChange = evt =>{
    setkeyword(evt.target.value)
   } 
    return (
    <>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor='busqueda'>Buscar Gif: </label><br></br> */}
            <input placeholder="Buscar Gifs" onChange={handleChange} type='text' id='busqueda' />
            <button>Buscar</button>
        </form>
        <h1>Ultima busqueda</h1>
        {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs}/>
    }
        <h3>Gifs populares</h3>
        {GifsPopulares}      
    </>)
}
