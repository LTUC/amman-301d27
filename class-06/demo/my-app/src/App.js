import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName : '',
      lon : '',
      lat : '',
      showMap: false,
      errorMsg : 'bad response',
      displayErr : false
    }
  }

  getLocationData = async(event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    console.log(cityName);

    let URL=`https://eu1.locationiq.com/v1/search.php?key=pk.43fed3791d35ddb76aa14f749c6d3080&q=${cityName}&format=json`;

    try {
      let locResult = await axios.get(URL); //send req to locationIQ API
      // console.log(locResult.data[0].display_name);
      this.setState({
        displayName : locResult.data[0].display_name,
        lon: locResult.data[0].lon,
        lat: locResult.data[0].lat,
        showMap : true
      })
    }
    catch {
      this.setState({
        displayMap : false,
        displayErr : true
      })
    }

  }

  render(){
    return(
      <>
      <h1>City Explorer</h1>

      <form onSubmit={this.getLocationData}>
        <input type='text' placeholder='Enter City' name='city' />
        <button type='submit'>Get Location</button>
      </form>
     
     <p>{this.state.displayName}</p>

      { 
        this.state.showMap &&
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.state.lat},${this.state.lon}`} alt='map' />
      }

       { 
       this.state.displayErr && 
       this.state.errorMsg 
       }

       
      </>
    )
  }
}

export default App;