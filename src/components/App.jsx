import React, { Component } from 'react';
import PokemonList from './PokemonList';


class App extends Component {
    
    constructor(){
        super();

        this.state = {
          type: '1',
          pokemonArr : []
        }
    }

    onSelectTypeChange(event) {
        console.log(event.target.value);
        this.setState({type : event.target.value})
    }

    onBtnClick(event) {
        event.preventDefault();
        let API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}`;
        fetch(API_URL)
            .then(response =>{
                return response.json();
            }).then(data =>{
                this.setState({pokemonArr : data.pokemon});
            }).catch(error=>{
                console.log(error);
            })
    }

    render(){

        return(
            <div className="container app-container">
                <h4>my small pokemon app</h4>
                <form>
                    <label>Choose your pokemon type</label>
                    <select name="" id="" onChange={this.onSelectTypeChange.bind(this)}>
                        <option defaultValue>Pokemon Type</option>
                        <option value="1">normal</option>
                        <option value="2">fighting</option>
                        <option value="3">flying</option>
                    </select>
                    <button  
                    onClick={ this.onBtnClick.bind(this) } 
                    className="btn btn-primary">Search</button>
                </form>

                <PokemonList pokemonArr={this.state.pokemonArr}/>

            </div>
        );
    }
}
 
export default App;