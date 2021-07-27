import React from 'react';
import Parent from './components/Parent';

class App extends React.Component {
  render(){
    return(
      <>
      <h1>Passing Functions</h1>
      <Parent />
      </>
    )
  }
}

export default App;