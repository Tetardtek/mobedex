const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
    },
    {
        name: "Squirtle",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      }, 
      {
        name: "Charmander",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
  ];
  

 let pokemon = pokemonList[3];
  
  function PokemonCard() {
    if (pokemon.imgSrc !== undefined) {
  return <figure>
      <img className="pkmnPic" src={pokemon.imgSrc} alt={pokemon.name}/>
      <figcaption>{pokemon.name}</figcaption>
  </figure>
    } else {
        return <figure><p>???</p>
        <figcaption>{pokemon.name}</figcaption>
        </figure>
  }
}











export default PokemonCard;