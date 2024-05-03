import React from 'react';
import './Gif.css';
import { Link } from 'wouter';

export default function Gif({title, id,url, className})
{
return (
    <Link to={`/gif/${id}`} className={`Gif ${className}`}>
    {/* <h4>{title}</h4> */}
    <img alt={title} src={url} />        
    </Link>
    )
}