import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const items = props.items.map((item) => {
    return (
      <li className='pokemonList' key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul className='list'>{items}</ul>;
};
export default PokeList;
