const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
    },
  ];
  

 let pokemon = pokemonList[1];
  
  function PokemonCard() {
    if (pokemon.imgSrc !== undefined) {
  return <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name}/>
      <figcaption>{pokemon.name}</figcaption>
  </figure>
    } else {
        return <figure><p>???</p>
        <figcaption>{pokemon.name}</figcaption>
        </figure>
  }
}











export default PokemonCard;