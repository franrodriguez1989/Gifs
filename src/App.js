import './App.css';
import ListOfGifs from './components/ListOfGifs';
/* import {useState} from 'react'; */
import { Route, Link } from "wouter";
export default function App() {
  /* const [keyword, setkeyword] = useState('') */
  return (
    <div className="App">
      <section className="App-content">
      {<h1>Buscador de Gifs</h1>}
      <Link href='http://localhost:3000/'>Ir al principio</Link>
      <Link href='/gif/Vinicius'>Vinicius</Link>
      <Link href='/gif/Bellingham'>Bellingham</Link> 
      <Link href='/gif/Mbappe'>Mbappe</Link>
      <span className="App">
      <form /* onSubmit={handleSubmit} */>
        <label htmlFor="keyword">Introduce un término de búsqueda:</label>
        <input
          type="text"
          id="keyword"
          /*value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          required */
        />
        <button type="submit">Buscar</button>
      </form></span>
        <Route component={ListOfGifs} path='/gif/:keyword'/>
      {/* <ListOfGifs keyword={keyword} /> */}
      </section>
    </div>
  )
}


