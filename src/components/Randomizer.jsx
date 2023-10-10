
/* RANDOMIZER */

function Randomizer(pokemonList) {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
 return pokemonList[randomIndex];
}




export default Randomizer;