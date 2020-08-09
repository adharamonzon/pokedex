import React from 'react';
import PropTypes from 'prop-types';

import favorito from '../images/favorito.png';

const Pokemon = (props) => {
  const types = props.item.types.map((type, index) => {
    return (
      <li className='main__typesList--type' key={index}>
        {type}
      </li>
    );
  });

  const favoritePokemon = () => {
    props.favoritePokemon({
      pokemonId: props.item.id,
    });
  };

  return (
    <div className={props.item.isFavorite ? 'main__pokemonContainer favorite-pokemon' : 'main__pokemonContainer'} onClick={favoritePokemon}>
      <img className={props.item.isFavorite ? 'favoriteIcon show' : 'favoriteIcon'} src={favorito} alt='pokemon favorito' />

      <img className='main__pokemonImg' alt='pokemon' src={props.item.url} />
      <h3 className='main__pokemonName'>{props.item.name}</h3>
      <ul className='main__typesList'>{types}</ul>
    </div>
  );
};

export default Pokemon;

Pokemon.propTypes = {
  types: PropTypes.array,
  url: PropTypes.string,
  name: PropTypes.string,
};
