import React from 'react';
import PokeList from './PokeList';
import api from '../data/apiData.json';

import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: api,
      favorite: '',
    };
    this.favoritePokemon = this.favoritePokemon.bind(this);
  }

  favoritePokemon() {
    console.log('App: me han clicado');
    this.setState((prevState) => {
      if (prevState.favorite === '') {
        this.state.favorite = 'favorite-pokemon';
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className='title'> Mi lista de Pokemon </h1>
        <PokeList items={this.state.pokemon} favoritePokemon={this.favoritePokemon} className={this.state.favorite} />
      </div>
    );
  }
}

export default App;
