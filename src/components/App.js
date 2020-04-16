import React from 'react';
import PokeList from './PokeList';
import api from '../data/apiData.json';

import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: api,
    };
    this.favoritePokemon = this.favoritePokemon.bind(this);
  }

  favoritePokemon(data) {
    let pokemons = this.state.pokemon;
    const index = pokemons.findIndex((pokemon) => pokemon.id === data.pokemonId);
    if (pokemons[index].isFavorite === true) {
      pokemons[index].isFavorite = false;
    } else {
      pokemons[index].isFavorite = true;
    }
    this.setState({ pokemon: pokemons });
  }
  render() {
    return (
      <div>
        <h1 className='title'> Mi lista de Pokemon </h1>
        <PokeList items={this.state.pokemon} favoritePokemon={this.favoritePokemon} />
      </div>
    );
  }
}

export default App;
