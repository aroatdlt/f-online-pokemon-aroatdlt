import React, { Component } from 'react';
import  { createPromise } from './components/services/ApiCall';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import './App.css';

class App extends Component {
  render() {
    createPromise();
    return (
      <div>
        <Header></Header>
        <PokemonList></PokemonList>
      </div>
    );
  }
}

export default App;
