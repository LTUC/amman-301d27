import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      photoArray : []
    }
  }

  getPhotos = (event) => {
    event.preventDefault();
    const searchQuery = event.target.name.value;
    const url = `http://localhost:3010/getPhotos?name=${searchQuery}`;
    axios
    .get(url)
    .then(result => {
      this.setState({
        photoArray : result.data
      })
    })
    .catch(err => {
      console.log(err);
    }) 
  }
  
  render(){
    return(
      <>
      <p>Search about photos: </p>
      <form onSubmit={this.getPhotos}>
        <input type='text' name='name' placeholder='what you want to search about?' />
        <button type='submit'>search</button>
      </form>

      { this.state.photoArray.map(item => {
        return(
          <>
          <img src={item.imgUrl} alt='img' width='200px' height='200px' />
          <p>Likes = {item.numLikes}</p>
          </>
        )
      })}

      </>
    )
  }
}

export default App;