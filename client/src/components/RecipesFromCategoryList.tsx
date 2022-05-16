import {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";
import {fetchRecipesByCategory} from "../api/fetches";
import { useParams } from "react-router-dom";
import {fetchRecipesByCategoryQuery} from "../api/fetches";
import CategoryNav from "./CategoryNav";


const RecipesFromCategoryList = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const {id} = useParams<any>();
    useEffect(() => {
        // fetchRecipesByCategory(id).then(recipes => setRecipes(recipes.data));
        if(query) {
            fetchRecipesByCategoryQuery(id, query).then(recipes => setRecipes(recipes.data));
        }
        else {
            fetchRecipesByCategory(id).then(recipes => setRecipes(recipes.data));
        }

    }, [query, id]);
    // }, [id]);
    

    return (
        <div>
            <form >
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>
            <CategoryNav />
            {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </div>
    )
}
export default RecipesFromCategoryList;