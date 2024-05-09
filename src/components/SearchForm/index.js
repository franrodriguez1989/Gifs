import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setkeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault(); //sirve para que formulario no envio informaicion de forma predeterminada.
    //navegar a otra ruta
    onSubmit({ keyword });
  };
  const handleChange = (evt) => {
    setkeyword(evt.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          placeholder="Buscar Gifs"
          onChange={handleChange}
          type="text"
          id="busqueda"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
}
export default React.memo(SearchForm);
