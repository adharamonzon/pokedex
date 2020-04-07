import React from 'react';

const Pokemon = (props) => {
  const types = props.item.types.map((type, index) => {
    return (
      <li className='type' key={index}>
        {type}
      </li>
    );
  });

  return (
    <div className='pokemonContainer'>
      <img alt='pokemon' src={props.item.url} />
      <h3 className='pokemonName'>{props.item.name}</h3>
      <ul className='typesList'>{types}</ul>
    </div>
  );
};

export default Pokemon;
