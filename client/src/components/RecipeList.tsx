import {useState, useEffect} from 'react';



const RecipeList = () => {
    const [recipes, setRecipes] = useState<any>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const recipes = await fetch('http://localhost:3000/recipes')
            .then(res => res.json())
            setRecipes(recipes);
        }
        fetchRecipes();
        }, [])
    return (
        <div>
            <h1>{recipes.map((recipe: any) => recipe.title)}</h1>
        </div>
    )
}
export default RecipeList;

