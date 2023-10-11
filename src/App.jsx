import pokemonList from "./components/PokedexBank";
import PokemonCard from "./components/PokemonCard";
import Randomizer from "./components/Randomizer";
import React, { useState } from 'react';

const actRandomizer = () => {
  window.location.reload();
};

const randomPokemon = Randomizer(pokemonList);
console.log(randomPokemon.name);

/* CARD */
function App() {
  const [zPokemon, setPokemon] = useState(randomPokemon);

  function swPokemon() {
    const i = pokemonList.findIndex(e => e.name === zPokemon.name)
    const k = (i + 1) % pokemonList.length;
    
    setPokemon(pokemonList[k])
  }
  return (
    <div id ="pkmnCard">
      <PokemonCard pokemon={zPokemon} />
      <button className="nextBtn" onClick={swPokemon}>Next Pokemon</button>
      <button className="randBtn" onClick={actRandomizer}>Random</button>
    </div>
  );
}



















export default App