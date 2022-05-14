import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import CategoryNav from './CategoryNav';



 



const RecipeList = () => {
    const [query, setQuery] = useState('');
    const searchForRecipes = async (query: string) => {
        const recipes = await fetch(`http://localhost:3000/recipes?search=${query}`)
        .then(res => res.json())
        setRecipes (recipes);
    }
    const [recipes, setRecipes] = useState<any>([]);
    const fetchRecipes = async () => {
        const recipes = await fetch('http://localhost:3000/recipes')
        .then(res => res.json())
        setRecipes(recipes);
    }
    useEffect(() => {
        if(query) {
            searchForRecipes(query)
        }else {
        fetchRecipes();
        }
        }, [query])
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
export default RecipeList;

