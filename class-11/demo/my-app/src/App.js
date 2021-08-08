import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

class App extends React.Component {
  render(){
    return(
      <>
        <h1>Auth0 App</h1>
        <LoginButton />
        <Profile />
        <LogoutButton />
      </>
    )
  }
}

export default App;