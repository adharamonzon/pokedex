import React from 'react';
import PokeList from './PokeList';
import api from '../data/apiData.json';

import pokemon from '../images/pokemonTitle.jpg';
import pokeBall from '../images/pokebola.jpg';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: api,
    };
    this.favoritePokemon = this.favoritePokemon.bind(this);
  }
  //f(x) pokemon favorito
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
      <>
        <header className='header'>
          <div className='header__img-container-logo'>
            <img className='header__image' src={pokemon} alt='pokemon' title='pokemon' />
          </div>
          <h1 className='header__title'> PokeDex </h1>
          <div className='header__img-container-ball'>
            <img className='header__image' src={pokeBall} alt='pokeball' title='pokebola' />
          </div>
        </header>
        <main>
          <PokeList items={this.state.pokemon} favoritePokemon={this.favoritePokemon} />
        </main>
      </>
    );
  }
}

export default App;
