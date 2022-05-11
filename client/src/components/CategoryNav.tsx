import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▼</h3>
            {showCategories && categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)}
            {/* {categories.map((category: any) => <h1 key={category}>{category}</h1>)} */}
        </div>
    )
}
export default CategoryNav;
