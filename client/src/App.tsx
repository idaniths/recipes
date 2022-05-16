import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import RecipeList from './components/RecipeList';
import Recipe from './components/SingleRecipe';
import CategoryNav from './components/CategoryNav';
import { Link } from 'react-router-dom';
import RecipesFromCatergoryList from './components/RecipesFromCategoryList';
import SearchRecipeViaCategory from './components/SearchRecipeViaCategory';







const App = () => (

  <>
      <h1 className="header">Safta Mazal Recipes</h1>
      <Link to={'/'}><button>Home</button></Link>
      {/* <Link to={'/recipes'}><button>Recipes</button></Link> */}
      {/* <Link to={'/category'}><button>Category</button></Link> */}
      
      <Routes>
      <Route path="/" element={<RecipeList />} /> 
      <Route path="/category" element={<CategoryNav />} />
      <Route path="/recipes/:id" element={<Recipe />} />
      <Route path="/category/:id" element={<RecipesFromCatergoryList />} />
      <Route path="/search/:id" element={<SearchRecipeViaCategory />} />
      </Routes>

    </>
)
  


export default App;
