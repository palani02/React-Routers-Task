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
          <div className='title'>The Rick and Morty API</div>
        <div className='container'>
        {character.length
        ?character.map(character=><div>{character.name}<br/> 
        {character.image} <br/>
        {character.status} <br/>
        {character.species} <br/>
        {character.type} 
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