import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



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
    `

const CategoryNav = () => {
    const [showCategories, setShowCategories] = useState(true);
    const [categories, setCategories] = useState<any[]>([]);
    useEffect(() => { 
        const fetchCategories = async () => {
            const categories = await fetch('http://localhost:3000/category')
            .then(res => res.json())
            setCategories(categories);
        }
        fetchCategories();
        }, [])
    return (
        <StyledCategoryNav>
           
        
        {/* onClick={() => setShowCategories(!showCategories)} */}
            {/* <h3 className="nav-item">Categories</h3> */}
            {showCategories && categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)}
           
      
        </StyledCategoryNav>
    )
}
export default CategoryNav;
