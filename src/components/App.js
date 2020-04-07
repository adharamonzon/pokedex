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
  }

  render() {
    return (
      <div>
        <h1 className='title'> Mi lista de Pokemon </h1>
        <PokeList items={api} />
      </div>
    );
  }
}

export default App;
