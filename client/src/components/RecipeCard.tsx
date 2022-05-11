import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    
    `


const RecipeCard = ({recipe}:any) => {
    return(
        <StyledRecipeCard>
        <img src={recipe.imageUrl} alt="receptbild" />
        <div>
        <Link to={`/recipes/${recipe._id}`}>
            <h1>{recipe.title}</h1>
        </Link>
            <p>{recipe.description}</p>
        </div>
        <div>
            <h2>{recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</h2>
            {/* <Stars recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false}/> */}
        </div>
    </StyledRecipeCard>
    )
}

export default RecipeCard;