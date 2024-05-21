import React from "react"
import "./style.css"
import { RAITINGS } from "../../services/settings"
import useForm from "./hook"

function SearchForm({
  initialKeyword,
  initialRaiting = "g",
  initialTimes = 0,
}) {
  //const [raiting, setRaiting] = useState(initialRaiting)

  const {
    keyword,
    times,
    raiting,
    updateKeyword,
    updateRaiting,
    updateLocation,
  } = useForm({
    initialKeyword,
    initialRaiting,
    initialTimes,
  })

  const handleChange = (evt) => updateKeyword(evt.target.value)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    //navegar a otra ruta
    updateLocation()
  }

  const handleChangeRaiting = (evt) => updateRaiting(evt.target.value)

  return (
    <div className="search-select-container">
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            placeholder="Buscar Gifs"
            onChange={handleChange}
            type="text"
            id="busqueda"
            className="search-input"
            value={keyword}
          />
          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>
      </div>
      <select onChange={handleChangeRaiting} value={raiting} className="select">
        <option disabled>Raiting type</option>
        {RAITINGS.map((raiting) => (
          <option key={raiting}>{raiting}</option>
        ))}
      </select>
      <small>Nº de busquedas: {times}</small>
    </div>
  )
}
export default React.memo(SearchForm)
