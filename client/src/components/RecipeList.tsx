import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import CategoryNav from './CategoryNav';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {fetchRecipesByCategory} from "../api/fetches";
import {fetchRecipesByCategoryQuery} from "../api/fetches";
//images
import saftaMazal from '../img/safta-mazal.jpg';
import background from '../img/background-image4.jpg';

const StyledRecipeList = styled.div`
    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
        const recipes = await fetch(`https://saftamazalsrecipes.herokuapp.com/recipes?search=${query}`)
        .then(res => res.json())
        setRecipes (recipes);
    }
    const [recipes, setRecipes] = useState<any>([]);
    const fetchRecipes = async () => {
        const recipes = await fetch('https://saftamazalsrecipes.herokuapp.com/recipes')
        .then(res => res.json())
        setRecipes(recipes);
    }

    const {id} = useParams<any>();

    useEffect(() => {
        if(query && !id) {
            searchForRecipes(query)   
        }
        else if(query && id) {
            //.then means that the function will be executed after the fetch is done
            fetchRecipesByCategoryQuery(id, query).then(recipes => setRecipes(recipes.data));
        }
        else if(!query && id) {
            fetchRecipesByCategory(id).then(recipes => setRecipes(recipes.data));
        }
        else{
        fetchRecipes();
    }
        }, [query, id])
    return (
        
        <StyledRecipeList>
            <div className='header-background'>
                <header>
                
                    <Link to={"/"}><h1 className="header-text">Safta Mazal's Recipes <img src={saftaMazal} alt="" /></h1></Link>
                    <form >
                        {!id && <input type="text" placeholder="Search Recipe" value={query} onChange={(e) => setQuery(e.target.value)} />}
                        {id && <input type="text" placeholder={`Search recipe in ${id}`} value={query} onChange={(e) => setQuery(e.target.value)} />}
                    </form>
                    <CategoryNav/>
                </header>
            </div>
            <div className='container'>
                        {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
           </div>
        </StyledRecipeList>
    )
}
export default RecipeList;

