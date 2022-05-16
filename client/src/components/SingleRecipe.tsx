import { useState, useEffect } from 'react';
import { useParams }  from 'react-router-dom';
import styled from 'styled-components';
import Ratings from './Ratings';
import { fetchRecipeById } from '../api/fetches';


const StyledRecipe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    img {
        width: 80%;
    }
    li {
        padding: 0.5rem;
        padding-right: 7rem;
        
    }
    
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
        }, [id]); // [] means that this effect will only run once

        const [voted, setVote] = useState(false)//this is to prevent the user from voting twice
        const setClicked = () => {
            setVote(true)
    
    
        }
    return (
        <StyledRecipe>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt="" />
            <div>
                <h2>{recipe.ingredients && recipe.ingredients.length} Ingredients | {recipe.timeinMins} Minutes</h2>
                {/* {recipe.ratings &&<Ratings recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false}/>} */}
                {(voted === false) ? <><h3>Rate my recipe if you dare</h3> 
                <span onClick={setClicked}>{recipe.ratings && <Ratings edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} />}</span> 
                </>: <h3>Toda Raba!</h3>}
            </div>
            <div>
            <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient:any) => (
                        <li key={ingredient.ingredient}>
                            {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                        </li>
                    ))}
                </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions && recipe.instructions.map((step:any) => (
                    <li key={step.instruction}>
                        {step.instruction}
                    </li>
                ))}
            </ol>
            </div>
        </StyledRecipe>
    )
}
export default Recipe;
