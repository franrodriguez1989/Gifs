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
      <Link to='http://localhost:3000'>Ir al principio</Link>
      <Link to='/gif/Vinicius'>Vinicius</Link>
      <Link to='/gif/Bellingham'>Bellingham</Link> 
      <Link to='/gif/Mbappe'>Mbappe</Link>
      
        <Route component={ListOfGifs} path='/gif/:keyword'/>
      {/* <ListOfGifs keyword={keyword} /> */}
      </section>
    </div>
  )
}


