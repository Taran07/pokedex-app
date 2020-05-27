import React, { Component } from 'react';


class Pokemon extends Component {

    constructor() {
        super();

        this.state = {
            height : 0,
            weight : 0,
            imageUrl : '',
            showValues : false
        }
    }

    pokemonInfo() {
        fetch(this.props.url)
            .then(response =>{
                return response.json();
            }).then(data =>{
                console.log(data)
                this.setState({
                    showValues : true,
                    weight : data.weight,
                    height : data.height,
                    imageUrl : data.sprites.front_default
                })
            }).catch(error =>{
                console.log(error)
            })
    }

    reset(){
        this.setState({showValues : false});
    }

    render() {

        if(!this.state.showValues){
            return(
                    <li className="card" onClick={this.pokemonInfo.bind(this)} > name: {this.props.name} </li>
            )
        }else if(this.state.showValues){
            return(
                <li className="card" onClick={this.reset.bind(this)}>
                    <div className="row">
                        <div className="col-6">
                            <p>Name : {this.props.name} </p>
                            <p>Height: {this.state.height} </p>
                            <p>Weight : { this.state.weight} </p>   
                        </div>
                        <div className="col-6">
                            <img src={this.state.imageUrl} />
                        </div>
                    </div>    
                </li>
            )
        }else{
            return(
                <div>Loading...</div>
            )
        }    
    }

}

export default Pokemon;