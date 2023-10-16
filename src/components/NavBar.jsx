function NavBar({ clickPrev, clickNext, clickRdm, disabledPrev, disabledNext, setPokemonState, pokemonList }) {
  return (
    <div className="pkmnNav">
      <button className="nextBtn" onClick={clickNext} disabled={disabledNext}>
        Next
      </button>
      <button className="prevBtn" onClick={clickPrev} disabled={disabledPrev}>
        Previous
      </button>
      <button className="randBtn" onClick={clickRdm}>
        Random
      </button>
      <div className="pkmnArr">
        {pokemonList.map((pokemon, i) => (
          <button key={i} onClick={() => setPokemonState({ currentIndex: pokemon.id, randiPokemon: pokemon })}>
            {pokemon.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
