import "./App.css"
import { Link } from "wouter"
import { Route } from "wouter"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import SearchResult from "./pages/SearchResult"
import { GifsContextProvider } from "./context/GifsContext"
import logo from "./img/logo.png"
import ErrorPage from "./pages/ErrorPage"

export default function App() {
  return (
    <div className="App">
      <header className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </header>
      <section className="App-content">
        {/*  'http://localhost:3000' = '/'   */}

        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResult} path="/search/:keyword/:raiting?" />
          <Route component={Detail} path="/gif/:id" />
          <Route component={ErrorPage} path="/:rest*" />
        </GifsContextProvider>
      </section>
    </div>
  )
}
