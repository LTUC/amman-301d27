import React, { Component } from 'react'

class AddCatForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.addCat(e)}>
                <label>cat name</label>
                <input type="text" name="catName" />
                <label>cat breed</label>
                <input type="text" name="catBreed" />
                <input type="submit" value="Add cat" />
            </form>
        )
    }
}

export default AddCatForm;