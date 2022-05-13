import {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";
import {fetchRecipesByCategory} from "../api/fetches";
import { useParams } from "react-router-dom";


const RecipesFromCategoryList = () => {
    const [recipes, setRecipes] = useState([]);
    const {id} = useParams<any>();
    useEffect(() => {
        fetchRecipesByCategory(id).then(recipes => setRecipes(recipes.data));
    }, [id]);
    return (
        <div>
            {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </div>
    )
}
export default RecipesFromCategoryList;