import React from 'react';
import Square from './Square';

class Board extends React.Component {
    render(){
        return(
            <>
            <h3>Board Game</h3>
            {/* <div className='square some-margin'>1</div>
            <div className='square some-margin'>2</div>
            <div className='square some-margin'>3</div>
            <div className='square some-margin'>4</div> */}

            <Square squareNumber={'One'}/>
            <Square squareNumber={2}/>
            <Square squareNumber={3}/>
            <Square squareNumber={4}/>
            </>
        )
    }
}

export default Board;