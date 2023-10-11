
function PokemonCard({pokemon}) {
  if (pokemon.imgSrc !== undefined) {
    return (
      <figure>
        {pokemon.imgSrc ? (
          <img className="pkmnPic" src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption><strong>PokeN° : {pokemon.id}</strong> {pokemon.name}</figcaption>
      <section className="pkmnDesc">{pokemon.desc}</section>
      <section className="pkmnTypes1">{pokemon.pkmnTypes[0]}</section>
      <section className="pkmnTypes2">{pokemon.pkmnTypes[1]}</section>
      </figure>
    );
  }
}
export default PokemonCard;