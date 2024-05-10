import "./App.css";
import { Link } from "wouter";
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";
import { GifsContextProvider } from "./context/GifsContext";
import logo from "./img/logo.png";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        {/* Se puede sustituir 'http://localhost:3000' por '/'   */}
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResult} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}
