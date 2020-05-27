import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
    
    constructor() {
        super();
         
    }

    renderPokemon(){
        let counter = 0;
        return this.props.pokemonArr.map(pokemon =>{
            // console.log(pokemon.pokemon.name)
            counter = counter+1;
            return (
                <Pokemon key={counter} name={pokemon.pokemon.name} url={pokemon.pokemon.url} />
            )
        })
    }

    render() {

        if(this.props.pokemonArr.length > 0) {
        
            return(
            <ul>
                {this.renderPokemon()}
            </ul>
            )

        }

        return(
            <div>
                Loading...
            </div>
        )
    }
}

export default PokemonList;