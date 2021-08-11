import React, { Component } from 'react'

class UpdateCatForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.updateCat(e)}>
                <fieldset>
                    <legend>Update Cat Info</legend>
                    <label>cat name</label>
                    <input type="text" name="catName" defaultValue={this.props.catName}/>
                    <label>cat breed</label>
                    <input type="text" name="catBreed" defaultValue={this.props.catBreed}/>
                    <input type="submit" value="Update" />
                </fieldset>
            </form>
        )
    }
}

export default UpdateCatForm;