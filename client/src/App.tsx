import React from 'react';
import './App.css';
// import RecipeList from './components/RecipeList';
import Recipe from './components/SingleRecipe';


const App = () => (
 
  <div>
  <h1 className='header'>Recipes</h1>
  {/* <RecipeList /> */}
  <Recipe />
  </div>
)

export default App;
