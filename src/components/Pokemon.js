import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const types = props.item.types.map((type, index) => {
    return (
      <li className='type' key={index}>
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
    <div className={props.item.isFavorite ? 'pokemonContainer favorite-pokemon' : 'pokemonContainer'} onClick={favoritePokemon}>
      <img alt='pokemon' src={props.item.url} />
      <h3 className='pokemonName'>{props.item.name}</h3>
      <ul className='typesList'>{types}</ul>
    </div>
  );
};

export default Pokemon;

Pokemon.propTypes = {
  types: PropTypes.array,
  url: PropTypes.string,
  name: PropTypes.string,
};
