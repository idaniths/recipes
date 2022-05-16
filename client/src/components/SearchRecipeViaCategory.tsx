import {fetchRecipesByCategoryQuery} from '../api/fetches';
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import CategoryNav from './CategoryNav';
import { useParams } from 'react-router-dom';


const SearchRecipeViaCategory = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState<any>([]);
    const {id} = useParams<any>();
    useEffect(() => {
        if(query) {
            fetchRecipesByCategoryQuery(id, query).then(recipes => setRecipes(recipes.data));    
        }
    }, [query]);
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
export default SearchRecipeViaCategory;
