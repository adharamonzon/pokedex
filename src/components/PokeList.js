import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const items = props.items.map((item) => {
    /*    console.log(props); */

    return (
      <li className='pokemonList' key={item.id}>
        <Pokemon item={item} favoritePokemon={props.favoritePokemon} />
      </li>
    );
  });
  return <ul className='list'>{items}</ul>;
};
export default PokeList;
