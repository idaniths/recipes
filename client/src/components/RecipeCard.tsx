import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const StyledRecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 2rem;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0px 0px 10px #ccc;
    img {
        width: 50%;
    }
    .title-and-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
    h1 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    `


const RecipeCard = ({recipe}:any) => {
    return(
        <StyledRecipeCard>
        <div>
        <Link className="title-and-img" to={`/recipes/${recipe._id}`}>
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