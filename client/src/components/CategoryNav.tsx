import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledCategoryNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & .nav-item{
        :hover{
            cursor: pointer;
        }
    }
    `

const CategoryNav = () => {
    const [showCategories, setShowCategories] = useState(false);
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
           
        <div>
            <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Categories</h3>
            {showCategories && categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)}
           
        </div>
        </StyledCategoryNav>
    )
}
export default CategoryNav;
