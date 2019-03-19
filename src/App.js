import React, { Component } from 'react';
import  { createPromise } from './components/services/ApiCall';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataPokemon: createPromise(),
      input: "",
    }
  }

  // componentDidMount(){
  //   this.setState({
  //     dataPokemon: createPromise()
  //   }
  //   //.then(data => console.log(data));
  // )
  // }


  render() {
    return (
      <div>
        <Header/>
        <PokemonList dataPokemon = {this.state.dataPokemon}/>
      </div>
    );
  }
}

export default App;
