import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    }
  }


  getPokeInfo = async() => {
    console.log(process.env.REACT_APP_SERVER_URL);
    let URL = `${process.env.REACT_APP_SERVER_URL}/getPoke?name=bulbasaur`;
    let pokeData = await axios.get(URL);

    this.setState({
      name : pokeData.data.name
    })

  }
  
  render(){
    return(
      <>
      <h1>Front-End</h1>
      <button onClick={this.getPokeInfo}>Get Poke Data</button>
      <p>{this.state.name}</p>
      </>
    )
  }
}

export default App;