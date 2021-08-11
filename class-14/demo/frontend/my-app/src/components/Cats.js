import React, { Component } from 'react'

class Cats extends Component {
    render() {
        return (
            <>
                { this.props.showCatsComponent &&
                    this.props.cats.map((cat, idx) => {
                        return (
                            <div key={idx}>
                                <div>
                                    
                                    cat name : {cat.catName}
                                    <button onClick={() => this.props.deleteCat(idx)}>X</button>
                                    <button onClick={() => this.props.showUpdateForm(idx)}>Update cat</button>
                                </div>
                                
                                {/* <p>cat breed: {cat.breed}</p> */}
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Cats;