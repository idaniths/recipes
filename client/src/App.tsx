import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import RecipeList from './components/RecipeList';
import Recipe from './components/SingleRecipe';
import CategoryNav from './components/CategoryNav';
import RecipesFromCatergoryList from './components/RecipesFromCategoryList';


const App = (  ) => (

  <>  
      <Routes>
        <Route path="/" element={<RecipeList />} /> 
        <Route path="/category" element={<CategoryNav />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/category/:id" element={<RecipesFromCatergoryList />} />
      </Routes>

  </>
)
  


export default App;
