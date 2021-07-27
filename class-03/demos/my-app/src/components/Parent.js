import React from 'react';
import CatChild from './CatChild';
import CatImg from './assets/cat.jpg';

class Parent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            catName : 'Frankie',
            imgURL : CatImg,
            numOfTotalTunas : 15
        }
    }

    decrementNumOfTotalTunas = () => {
        this.setState({
            numOfTotalTunas : this.state.numOfTotalTunas - 1
        })
    }

    render(){
        return(
            <>
                <p>I am in the Parent componenet</p>
                <h3>Number of Total Tunas = {this.state.numOfTotalTunas}</h3>
                <CatChild 
                catName={this.state.catName} 
                imgURL={this.state.imgURL}
                decrementFun={this.decrementNumOfTotalTunas}
                />
                <CatChild 
                catName={this.state.catName} 
                imgURL={this.state.imgURL}
                decrementFun={this.decrementNumOfTotalTunas}
                />

            </>
        )
    }
}

export default Parent;