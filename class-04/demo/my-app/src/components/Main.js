import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InfoModal from './InfoModal';

class Main extends React.Component {

constructor(props){
    super(props);
    this.state = {
       name:'',
       age:'',
       favProgLang:'',
       likeCats: false,
       show: false
    }
}

submitForm = (event) => {
    event.preventDefault();
    this.setState({
        name:event.target.name.value,
        age: event.target.age.value,
        favProgLang: event.target.progLang.value,
        likeCats: event.target.likeCats.checked,
        show:true
    })
    console.log(this.state);

}

handleClose = () => {
    this.setState({
        show:false
    })
}
  
render(){
    return(
      <>
      <h3>In the Main component</h3>

        <Form onSubmit={this.submitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name='name'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter your age" name='age'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Do you like cats?" name='likeCats'/>
            </Form.Group>

            <Form.Group>
            {/* <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select> */}
                <Form.Label>Select your favourite language</Form.Label>
                <Form.Control as='select' name='progLang'>
                    <option value='JavaScript'>JavaScript</option>
                    <option value='C#'>C#</option>
                    <option value='C++'>C++</option>
                    <option value='PHP'>PHP</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <InfoModal 
        show={this.state.show}
        handleClose={this.handleClose}
        name={this.state.name}
        age={this.state.age}
        favLang={this.state.favProgLang}
        likeCats={this.state.likeCats}
        />
      </>
    )
  }
}

export default Main;