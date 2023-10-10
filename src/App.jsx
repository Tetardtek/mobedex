import pokemonList from "./components/PokedexBank";
import PokemonCard from "./components/PokemonCard";
import Randomizer from "./components/randomizer";
import React, { useState } from 'react';

const actRandomizer = () => {
  window.location.reload();
};

const randomPokemon = Randomizer(pokemonList);
console.log(randomPokemon.name);
/* CARD */
function App() {
  const [aPokemon, aPokemon2] = useState(randomPokemon);

  function swPokemon() {
    const i = pokemonList.findIndex(e => e.name === aPokemon.name)
    const j = (i + 1) % pokemonList.length;
    
    aPokemon2(pokemonList[j])
  }
  return (
    <div id ="pkmnCard">
      <PokemonCard pokemon={aPokemon} />
      <button className="nextBtn" onClick={swPokemon}>Next Pokemon</button>
      {/* <button onClick={randomPokemon}>Randomize</button> */}
      <button className="randBtn" onClick={actRandomizer}>Random</button>
    </div>
  );
}



















export default App