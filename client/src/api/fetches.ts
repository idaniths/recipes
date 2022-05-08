import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchRecipes() {
    try{
        const response = await axios.get('/recipes');
    return response;
    } catch (error: any) {
       return error.response
    }
}

export async function fetchRecipesByCategory(category: any) {
    const response = await axios.get(`/category/${category}`);
    return response;
}