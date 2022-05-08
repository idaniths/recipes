import { useState, useEffect } from 'react';
import { useParams }  from 'react-router-dom';

const Recipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchRecipe = async () => {
            const recipe = await fetch(`http://localhost:3000/recipes/${id}`)
            .then(res => res.json())  
            setRecipe(recipe);
        }
        fetchRecipe();
        }, [id]);  // [] means that this effect will only run once
    return (
        <div>
            <h1>{recipe.title}</h1>
        </div>
    )
}
export default Recipe;