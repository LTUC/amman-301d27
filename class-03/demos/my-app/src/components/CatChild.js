import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CatChild extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            numOfPets : 0,
            numOfTakenTuna : 0
        }
    }
    
    incrementNumOfPets = () => {
        this.setState({
            numOfPets: this.state.numOfPets + 1
        })
    }

    incrementNumOfTakenTuna = () => {
        this.setState({
            numOfTakenTuna : this.state.numOfTakenTuna + 1
        })
        this.props.decrementFun();
    }

    render(){
        return(
            <>
            {/* <h3>{this.props.catName}</h3>
            <img src={this.props.imgURL} alt={this.props.catName} title={this.props.catName} />  */}

            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.incrementNumOfPets} variant="top" src={this.props.imgURL} />
                <Card.Body>
                    <Card.Title>{this.props.catName}</Card.Title>
                    <Card.Text>
                        <p>Number of Pets 😸 : {this.state.numOfPets}</p>
                        <p>Number of Taken Tuna 😄 : {this.state.numOfTakenTuna}</p>
                    </Card.Text>
                    <Button onClick={this.incrementNumOfTakenTuna} variant="primary">I need Tuna</Button>
                </Card.Body>
            </Card>
            
            </>
        )
    }
}

export default CatChild;