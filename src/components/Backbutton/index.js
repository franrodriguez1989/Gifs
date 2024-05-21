import React from "react"
import "./style.css"

export default function BackButton() {
  const goBack = () => {
    window.history.back()
  }

  return (
    <button className="backbutton" onClick={goBack}>
      Volver
    </button>
  )
}
