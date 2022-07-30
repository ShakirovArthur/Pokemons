import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Pokemon = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [pokemonName]);

  const abc = pokemon ? Object.values(pokemon?.sprites).splice(0, 8) : [];

  return (
    <div className="pokemon">
      <ul>
        <li>name:{pokemon?.name}</li>
        <li>id:{pokemon?.id}</li>
        <li>height:{pokemon?.height}</li>
        {pokemon?.abilities.map((item) => (
          <li>ability:{item.ability.name}</li>
        ))}
      </ul>
      {abc.map((item) => (
        <img src={item} alt="" />
      ))}
      <Link to="/">Назад</Link>
    </div>
  );
};

export default Pokemon;
