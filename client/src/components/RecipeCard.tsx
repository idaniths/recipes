import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const StyledRecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40%;
    margin: 30px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    img {
        width: 50%;
    }
    h2 {
        font-size: 1rem;
    }
    
    `


const RecipeCard = ({recipe}:any) => {
    return(
        <StyledRecipeCard>
        <div>
        <Link to={`/recipes/${recipe._id}`}>
            <h1>{recipe.title}</h1>
        <img src={recipe.imageUrl} alt="receptbild" />
        </Link>
            <p>{recipe.description}</p>
        </div>
        <div>
            <h2>{recipe.ingredients.length} Ingredients | {recipe.timeinMins} Minutes</h2>
            <Ratings recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false}/>
            <p className="ratings-number">{recipe.ratings.length} Ratings</p>
        </div>
    </StyledRecipeCard>
    )
}

export default RecipeCard;