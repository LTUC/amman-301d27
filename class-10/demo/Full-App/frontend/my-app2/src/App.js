import React from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [] // recipes.length == 0 
    }
  }

  getRecipes = async (e) => {
    e.preventDefault();
    let ingredient = e.target.ingredient.value;
    const server = 'http://localhost:3001';

    // http://localhost:3001/recipes?ingredient=chicken
    // const recipes = await axios.get(`${server}/recipes?ingredient=${this.state.ingredient}`);
    const recipes = await axios.get(`${server}/recipes`, { params: { ingredient: ingredient } });

    // console.log(recipes.data);
    this.setState({ recipes: recipes.data })
  }

  render() {
    return (
      <>
        <form onSubmit={this.getRecipes}>
          <label>enter an ingredient</label>
          <input type="text" name="ingredient"></input>
          <button>submit</button>
        </form>

        {this.state.recipes.length && this.state.recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            recipe={recipe}
          />
        ))
        }
      </>
    )
  }
}

export default App;