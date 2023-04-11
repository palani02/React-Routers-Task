import React, { Component } from 'react'
import axios from 'axios'
import "./Cartoon.css"
export class Cartoons extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         character:[],
        //  errorMessage:' '
      }
    }
    componentDidMount()
    {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response =>
            {
                this.setState({character:response.data.results})
            })
    }
  render() {
    const {character}=this.state
    return (
      <React.Fragment>
          <div className='title'><h1>The Rick and Morty API</h1></div>
        <div className='container'>
        {character.length
        ?character.map(character=><div className='content'>
          <img src={character.image} alt="" />
       <p>Name: {character.name} </p>
        <p>Status: {character.status} <br/> </p>
        <p>Species: {character.species} <br/></p>
        {character.gender} 
        <p></p>
          </div>):null}
        <h1>Cartoons</h1>
      </div>
    
  
      </React.Fragment>
    )
  }
}

export default Cartoons