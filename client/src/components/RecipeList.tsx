import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import CategoryNav from './CategoryNav';
// import SearchRecipeViaCategory from './SearchRecipeViaCategory';
import styled from 'styled-components';
import saftaMazal from '../img/safta-mazal.jpg';
import background from '../img/background-image4.jpg';
import { Link } from 'react-router-dom';


const StyledRecipeList = styled.div`
    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    /* .container {  display: grid;
    grid-template-columns: 0.7fr 1.6fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "category recipes recipes"
        "category recipes recipes"
        "category recipes recipes";
    } */

    /* .category { 
        grid-area: category; 
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-self: flex-start;
        position: absolute;
        padding: 1rem;
        margin-left: 0.5rem;
        border-radius: 2px;
        box-shadow: 0px 0px 10px #ccc;
        min-height: 100vh;
    } */

    .recipes { 
        /* background-color: #919191; */
        grid-area: recipes; 
    }
    
    h3 {
        margin-left: 0.5rem;
    }
    .header-background{
  background-color: rgb(71, 71, 71);
}

header{
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 75vh;
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
  /* box-shadow: 0px 0px 5px #b4b4b4; */
}
& form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form input {
        display: flex;
        border: 0px solid #ccc;
        box-shadow: 0px 0px 2px #515151;
        border-radius: 1.2rem;
        padding: 10px;
        width: 25rem;
        margin: 0rem 0 1rem 0;
        align-self: center;
    }
    form:hover {
        
    }
    form input::placeholder {
       color: #313131;
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
            <div className='header-background'>
                <header>
                
                    <Link to={"/"}><h1 className="header-text">Safta Mazal's Recipes <img src={saftaMazal} alt="" /></h1></Link>
                    <form >
                        <input type="text" placeholder="Search Recipe" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </form>
                    <CategoryNav/>
                </header>
            </div>
            <div className='container'>
                        {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
                {/* <div className='recipes'>   
                </div> 
                <div className='category'>
                    <h3>Categories</h3>
                </div> */}
           </div>
        </StyledRecipeList>
    )
}
export default RecipeList;

