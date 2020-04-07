import React from 'react';

const Pokemon = (props) => {
  console.log(props.item.types);

  const types = props.item.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <div>
      <img alt='pokemon' src={props.item.url} alt={props.item.name} />
      <h3>{props.item.name}</h3>
      <ul>{types}</ul>
    </div>
  );
};

export default Pokemon;
