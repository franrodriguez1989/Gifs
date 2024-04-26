import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';
import { Link } from "wouter";
export default function ListOfGifs({params}){
  
  const {keyword} = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] =useState(false)
  
  useEffect(() => {
    console.log(`Tema seleccionado: ${keyword}`)
    setLoading(true)
    getGifs({keyword})
    .then (gifs => {
      setGifs(gifs)
      setLoading(false)
      })
    }, [keyword])
    
    if (loading) return <i>🔄🔄Cargando...🔄🔄</i> 
    
    return <>
    <Link to='http://localhost:3000'>Ir al principio</Link>
    {gifs.map(({id, title, url}) =>
    <Gif
     id={id} 
     key={id} 
     title={title} 
     url={url}
    />
    )}
    </>
}