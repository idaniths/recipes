import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';



const StyledCategoryNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    & .nav-item{
        :hover{
            cursor: pointer;
        }
    }
    & p{
        margin: 0.5rem;
        text-decoration: none;
        background-color: #fb3232;
        color: white;
        padding: 0.5rem;
        border-radius: 20px;
    }
    & p:hover {
        background-color: #971111;
    }
    & .active{
        background-color: #971111;
    }
    
    `

const CategoryNav = () => {
    //uselocation means that the parameter is available to us
    const location = useLocation();
    //.split means split the string into an array
    const splitLocation = location.pathname.split('/')[2];
    let splitLocationUrl =""
    if(splitLocation){
        // /%20/ means that the url will be displayed with spaces and replace the %20 with a space
        splitLocationUrl = splitLocation.replace(/%20/g, " ");
    }
    const [categories, setCategories] = useState<any[]>([]);
    
    useEffect(() => { 
        const fetchCategories = async () => {
            const categories = await fetch('https://saftamazalsrecipes.herokuapp.com/category')
            .then(res => res.json())
            setCategories(categories);
        }
        fetchCategories();
    }, [])
   
    return (
        <StyledCategoryNav>
   
            {categories.map((category):any => 
            <Link to={`/category/${category._id}`} key={category._id}> 
            <p className={category._id === splitLocationUrl ? "active": ""} key={category}>{category._id} ({category.count})</p>
            </Link>)}

        </StyledCategoryNav>
    )
}
export default CategoryNav;
