import React from 'react';

class Square extends React.Component {
    render(){
        return(
            <>
            <div className='square some-margin'>{this.props.squareNumber}</div>
            </>
        )
    }
}

export default Square;