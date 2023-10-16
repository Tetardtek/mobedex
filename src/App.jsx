import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Randomizer from './components/Randomizer';
import PokemonCard from './components/PokemonCard';
import pokemonList from './components/PokedexBank';

function App() {
  const [pokemonState, setPokemonState] = useState({
    currentIndex: 0,
    randiPokemon: Randomizer(pokemonList),
  });

  function swPokemon(direction) {
    setPokemonState((prevState) => {
      const currentIndex = prevState.currentIndex;
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % pokemonList.length;
      } else if (direction === 'prev') {
        newIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;
      }
      return {
        ...prevState,
        currentIndex: newIndex,
        randiPokemon: pokemonList[newIndex],
      };
    });
  }

  function actRandomizer() {
    setPokemonState((prevState) => {

      return {
        ...prevState,
        randiPokemon: Randomizer(pokemonList),
      };
    });
  }

  useEffect(() => {
    setPokemonState((prevState) => {
      return {
        ...prevState,
        currentIndex: pokemonList.findIndex(
          (pokemon) => pokemon.name === prevState.randiPokemon.name
        ),
      };
    });
  }, [pokemonState.randiPokemon]);

  return (
    <div>
      <div id="pkmnCard">
        <PokemonCard pokemon={pokemonState.randiPokemon} /><div className="pkmnNav">
        <button className="nextBtn" onClick={() => swPokemon('next')}>
          Next
        </button>
        <button className="prevBtn" onClick={() => swPokemon('prev')}>
          Previous
        </button>
        <button className="randBtn" onClick={actRandomizer}>
          Random
        </button>
      </div>
    </div>
    </div>
  );
}

App.propTypes = {
pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    desc: PropTypes.string,
    pkmnTypes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default App;