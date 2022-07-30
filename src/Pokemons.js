import { useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);
  return (
    <div className="Pokemons">
      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>
            <Link to={`/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
