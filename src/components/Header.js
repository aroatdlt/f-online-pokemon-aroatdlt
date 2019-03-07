import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <label htmlFor="pokemon__filter">Filtra pokemon por nombre</label>
                <input id="pokemon__filter" type="text" placeholder="Filtra pokemon por nombre" />
            </header>
        );
    }
}

export default Header;