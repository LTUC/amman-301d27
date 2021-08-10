import React, { Component } from 'react'
import Cats from './components/Cats'; // responsible for displaying the cats data
import Form from './components/Form'; // display the form for sending the data to the backend
import AddCatForm from './components/AddCatForm';
import axios from 'axios';


class App extends Component {

  //  TODO: get a list of cats from the backend
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      name: '',
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
        showCatsComponent: true,
        name : event.target.ownerName.value
      });
    } catch (error) {
      console.log(error);
    }
  }

  addCat = (event) => {
    event.preventDefault();
    const catName = event.target.catName.value;
    const catBreed = event.target.catBreed.value;

    const catData = {
      catName: catName,
      catBreed : catBreed,
      ownerName : this.state.name
    }

    axios
    .post(`${this.state.server}/addCat`, catData)
    .then( result => {
      console.log(result.data);
      this.setState({
        cats : result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteCat = (index) => {
    const data = {
      ownerName : this.state.name,
      // index : index
    }
    axios
    .delete(`${this.state.server}/deleteCat/${index}`,{ params: data })
    .then(result => {
      // console.log(result.data)
      this.setState({
        cats: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })

  }


  render() {
    return (
      <>
        <div>
          <Form
            getCats={this.getCats}
          />
          <AddCatForm 
          addCat={this.addCat}
          />
          <Cats
            cats={this.state.cats}
            showCatsComponent={this.state.showCatsComponent}
            deleteCat = {this.deleteCat}
          />
        </div>
      </>
    )
  }
}

export default App;