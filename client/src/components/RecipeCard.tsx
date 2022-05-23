import styled from "styled-components";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const StyledRecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 100%;
    margin: 2rem;
    padding: 0;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    
    :hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
    .image-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 101%;
        height: 10rem;
    }
    & img {
        width: 110%;
    }
    & .card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
    }
    & h1 {
        color: white;
        text-align: center;
        font-size: 2rem;
        width: 100%;
        text-shadow: 2px 2px 4px rgb(38, 38, 38);
    }
    .card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }
    h2 {
        font-size: 1rem;
        margin: 0.5rem 0 0.5rem 0;

    }
    p{
        font-size: 0.9rem;
        margin: 0.5rem 0 0.5rem 0;
        
    }
    
    `

const RecipeCard = ({recipe}:any) => {

    const bgStyling = {
        background: `url(${recipe.imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return(
        <StyledRecipeCard>
        <Link className="card-container" to={`/recipes/${recipe._id}`}>
        <div className="image-box" style={bgStyling}>
            <h1>{recipe.title}</h1>
        </div>
    
        <div className="card-info">
            <h2>{recipe.ingredients.length} Ingredients | {recipe.timeinMins} Minutes</h2>
            <Ratings recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false}/>
            <p className="ratings-number">{recipe.ratings.length} Ratings</p>
        </div></Link>
    </StyledRecipeCard>
    )
}

export default RecipeCard;