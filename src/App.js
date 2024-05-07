import "./App.css";
import { Link } from "wouter";
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

export default function App() {
  return (
    <StaticContext.Provider value={{ name: "paco", suscribeteAlCanal: true }}>
      <div className="App">
        <section className="App-content">
          {/* Se puede sustituir 'http://localhost:3000' por '/'   */}
          <div>
            <Link to="/">
              <img
                className="logo"
                src={require("./img/logo.png")}
                alt="Logo"
              />
            </Link>
          </div>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResult} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
