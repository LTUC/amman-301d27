import React from 'react';
import Button from './components/Button';
import Board from './components/Board';

class App extends React.Component {

    render(){
      return(
        <>
          <p>I am in the App Component</p>
          <p>welcome to 301 course</p>
          <Button />
          <Board />
        </>
        
      )
    }

}

export default App;