import { useState, useEffect } from 'react';
import { useParams }  from 'react-router-dom';
import styled from 'styled-components';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import saftaMazal from '../img/safta-mazal.jpg';
import backgroundImg from '../img/background-image4.jpg';


const StyledRecipe = styled.div`

    .recipe-container{
        max-width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #ccc;
        margin: 3rem 4rem;

    }
    header{
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        background-image: url(${backgroundImg});
        background-size: cover;
        background-position: center;
        height: 40vh;
    }
    
    .header-text{
        display: flex;
        flex-direction: row ;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        margin-left: 13rem;
        color: #fff;
        text-shadow: 2px 2px 4px rgb(38, 38, 38);
    }
    .header-text img{
        margin-left: 2rem;
        max-width: 11rem;
        border-radius: 50%;
        margin-right: 10px;
        border: #fff solid 2px;
    }
    img {
        width: 80%;
    }
    li {
        padding: 0.5rem;
        padding-right: 7rem;
    }
    .image-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: 70vh;
        border-radius: 5px 5px 0 0;
    }
    h1 {
        color: white;
        text-align: center;
        font-size: 4rem;
        text-shadow: 2px 2px 4px rgb(38, 38, 38);
    }
    h2{
        text-align: center;
        padding: 1rem;
    }
    h3{
        text-align: center;
        padding: 0.5rem 0 ;
    }
    p{
        text-align: center;
        padding: 2rem 10rem 3rem 10rem;
    }
    .ingredients{
        border-top: 10px dashed #e6e6e6;
        border-bottom: 10px dashed #e6e6e6;
        padding: 1rem 2rem 3rem 2rem;
    }
    .ingredients h2{
        padding-left: 0;
        text-align: left;
    }
    .ingredients ul{
        list-style-type: none;

    }
    .ingredients li{
        padding-left: 0;
        border-bottom: 1px solid #c2c2c2;
    }
    .instructions{
        border-bottom: 10px dashed #e6e6e6;       
        padding: 1rem 2rem 2rem 2rem;
        margin-bottom: 3rem;
        
    }
    .instructions h2{
        padding-left: 0;
        text-align: left;
    }
    .instructions ol{
        padding-left: 1rem;
    }
    .instructions li{
        padding-right: 15rem;
        padding-bottom: 0.8rem;
        
    }
    
    
    `


const Recipe = () => {
    
    const [recipe, setRecipe] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchRecipe = async () => {
            const recipe = await fetch(`https://saftamazalsrecipes.herokuapp.com/recipes/${id}`)
            .then(res => res.json())  
            setRecipe(recipe);
        }
        fetchRecipe();
        }, [id]); // [] means that this effect will only run once

        const [voted, setVote] = useState(false)//this is to prevent the user from voting twice
        const setClicked = () => {
            setVote(true)
        }
        const bgStyling = {
            backgroundImage: `url(${recipe.imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }

    return (
        <StyledRecipe>
            <div className='header-background'>
                <header>
                    <Link to={"/"}><h1 className="header-text">Safta Mazal's Recipes <img src={saftaMazal} alt="" /></h1></Link>    
                </header>
            </div>
            <div className='recipe-container'>
                <div className="image-box" style={bgStyling}>
                    <h1>{recipe.title}</h1>
                </div>
                <div className='ingredients-rating'>
                    <h2>{recipe.ingredients && recipe.ingredients.length} Ingredients | {recipe.timeinMins} Minutes</h2>

                    {(voted === false) ? <><h3>Rate my recipe if you dare</h3> 
                    <span onClick={setClicked}>{recipe.ratings && <Ratings edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} />}</span> 
                    </>: <h3>Toda Raba!</h3>}
                </div>
            <p>{recipe.description}</p>
            <div className='ingredients'>
                <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map((ingredient:any) => (
                            <li key={ingredient.ingredient}>
                                {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                            </li>
                        ))}
                    </ul>
            </div>
            <div className='instructions'>
                <h2>Instructions</h2>
                    <ol>
                        {recipe.instructions && recipe.instructions.map((step:any) => (
                            <li key={step.instruction}>
                                {step.instruction}
                            </li>
                        ))}
                    </ol>
            </div>
            </div>
        </StyledRecipe>
    )
}
export default Recipe;
