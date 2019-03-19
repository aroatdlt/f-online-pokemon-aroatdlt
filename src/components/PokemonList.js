import React, { Component } from 'react';

class PokemonList extends Component {
    render() {
        const { dataPokemon } = this.props;
        console.log(dataPokemon);
        return (
            <main>
                <ul className="list__pokemon">
                    {dataPokemon.map(pokemon => {
                        //console.log(pokemon);
                        return <li className="info__pokemon">
                            <img src={pokemon.image} alt={pokemon.name} />
                            <p>ID/{pokemon.id}</p>
                            <p>{pokemon.name}</p>
                            <ul>
                                <li>Poison</li>
                                <li>Grass</li>
                            </ul>
                        </li>
                    })}
                </ul>
            </main>
        );
    }
}

export default PokemonList;