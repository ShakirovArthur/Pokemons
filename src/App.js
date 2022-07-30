import Pokemons from "./Pokemons";
import Pokemon from "./Pokemon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Pokemons />
          </Route>
          <Route path="/:pokemonName">
            <Pokemon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
