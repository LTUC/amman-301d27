import React from 'react';
import CatChild from './CatChild';
import CatImg from './assets/cat.jpg';

class Parent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            catName : 'Frankie',
            imgURL : CatImg
        }
    }

    render(){
        return(
            <>
                <p>I am in the Parent componenet</p>
                <CatChild catName={this.state.catName} imgURL={this.state.imgURL}/>
                <CatChild catName={this.state.catName} imgURL={this.state.imgURL}/>

            </>
        )
    }
}

export default Parent;