import React from 'react';

class Recipe extends React.Component {
  render() {
    return(
      <div key={this.props.idx}>
        <h2><a href={this.props.recipe.uri}>{this.props.recipe.name}</a></h2>
        <img src={this.props.recipe.image_url} alt="recipe"/>
        <ul>
          {this.props.recipe.ingredients.map(ingredient => (
            <li key={Math.random()}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Recipe;