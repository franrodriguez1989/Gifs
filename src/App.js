import './App.css';
import ListOfGifs from './components/ListOfGifs';
/* import {useState} from 'react'; */
import { Route } from "wouter";
import Home from './pages/Home';
import Detail from './pages/Detail';
export default function App() {
  /* const [keyword, setkeyword] = useState('') */
  return (
    <div className="App">
      <section className="App-content">
      
        <Route component={Home} path='/'/>
        <Route component={ListOfGifs} path='/search/:keyword'/>
       <Route component={Detail} path='/gif/:id'/>
      </section>
    </div>
  )
}


