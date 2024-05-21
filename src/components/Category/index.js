import React from "react"
import { Link } from "wouter"

export function Category({ tendencias }) {
  return (
    <div id="tendencias">
      {tendencias.map((tendencia, index) => (
        <React.Fragment key={index}>
          <Link to={`/search/${tendencia}`}>Gifs de:&nbsp;{tendencia}</Link>
          {index < tendencias.length - 1 && <span>,&nbsp;</span>}
        </React.Fragment>
      ))}
    </div>
  )
}
