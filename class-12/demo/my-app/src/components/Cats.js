import React, { Component } from 'react'

export class Cats extends Component {
    render() {
        return (
            <>
                { this.props.showCatsComponent &&
                    this.props.cats.map((cat, idx) => {
                        return (
                            <div key={idx}>
                                <p>cat name : {cat.catName}</p>
                                <p>cat breed: {cat.breed}</p>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Cats