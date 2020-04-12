import React from 'react';
import PokeList from './PokeList';
import api from '../data/apiData.json';

import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: api,
      favorite: [],
    };
    this.favoritePokemon = this.favoritePokemon.bind(this);
  }

  favoritePokemon(data) {
    console.log('App: me han clicado', data);
    this.setState({
      favorite: this.data,
    });
    console.log(this.state); //no esta guardando el valor de data en el estado!
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
