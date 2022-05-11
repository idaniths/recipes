import { useState, useEffect } from 'react';
import { useParams }  from 'react-router-dom';
import styled from 'styled-components';


const StyledRecipe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    
    `


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
        <StyledRecipe>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt="" />
            <div>
                <h2>{recipe.ingredients && recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</h2>
            </div>
            <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient:any) => (
                        <li key={ingredient.ingredient}>
                            {ingredient.amount} 
                            {ingredient.unit} 
                            {ingredient.ingredient}
                        </li>
                    ))}
                </ul>
            
        </StyledRecipe>
    )
}
export default Recipe;
