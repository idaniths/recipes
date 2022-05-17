import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import CategoryNav from './CategoryNav';
// import SearchRecipeViaCategory from './SearchRecipeViaCategory';
import styled from 'styled-components';


const StyledRecipeList = styled.div`
    .container {  display: grid;
    grid-template-columns: 0.7fr 1.6fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "category recipes recipes"
        "category recipes recipes"
        "category recipes recipes";
    }

    .category { 
        grid-area: category; 
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-self: flex-start;
        position: absolute;
        margin-top: 1rem;
        margin-left: 1rem;
        max-width: 100%;
    }

    .recipes { 
        /* background-color: #919191; */
        grid-area: recipes; 
    }

    /* display: flex;
    flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center;
    position: relative; */
    & form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    & form input {
        display: flex;
        border: 0px solid #ccc;
        box-shadow: 0px 0px 10px #919191;
        border-radius: 0.2rem;
        padding: 10px;
        width: 10rem;
        margin: 1rem 0 1rem 0;
    }
    & form:hover {
        
    }
    & form input::placeholder {
       text-align: center;
       color: black;
       font-size: 1rem;
    }
   
    `

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
        <StyledRecipeList>
            <div className='container'>
                <div className='recipes'>   
                        {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
                </div> 
                <div className='category'>
                    <form >
                        <input type="text" placeholder="Search Recipe" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </form>
                    <h3>Categories</h3>
                    <CategoryNav/>
                </div>
           </div>
        </StyledRecipeList>
    )
}
export default RecipeList;

