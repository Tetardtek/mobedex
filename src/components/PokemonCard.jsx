
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
      </figure>
    );
  }

}
export default PokemonCard;