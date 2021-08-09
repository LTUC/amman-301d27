import React, { Component } from 'react'
import Cats from './components/Cats'; // responsible for displaying the cats data
import Form from './components/Form'; // display the form for sending the data to the backend
import axios from 'axios';


class App extends Component {

  //  TODO: get a list of cats from the backend
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      showCatsComponent: false,
      server: process.env.REACT_APP_SERVER_URL
    }
  }

  getCats = async (event) => {
    event.preventDefault();
    try {
      const paramsObj = {
        name: event.target.ownerName.value
      }
      const cats = await axios.get(`${this.state.server}/cat`, { params: paramsObj });
      // const cats = await axios.get(`${this.state.server}/cat?name=${this.state.name}`);
      this.setState({
        cats: cats.data,
        showCatsComponent: true
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <>
        <div>
          <Form
            updateName={this.updateName}
            getCats={this.getCats}
          />
          <Cats
            cats={this.state.cats}
            showCatsComponent={this.state.showCatsComponent}
          />
        </div>
      </>
    )
  }
}

export default App;