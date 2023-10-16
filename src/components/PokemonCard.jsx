import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    return (
      <figure>
        {pokemon.imgSrc ? (
          <img className="pkmnPic" src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption><strong>PokeN° : {pokemon.id}</strong> {pokemon.name}</figcaption>
      <section className="pkmnDesc">{pokemon.desc}</section>
      
      <section className="pkmnTypes">
      <section className="pkmnTypes1">{pokemon.pkmnTypes[0]}</section>
      <section className="pkmnTypes2">{pokemon.pkmnTypes[1]}</section>
      </section>
      </figure>
    );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    desc: PropTypes.string,
    pkmnTypes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
export default PokemonCard;