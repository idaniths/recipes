import express, {Request, Response, json}  from 'express';
import {getAllRecipes, getRecipeByQuery} from '../db/recipes';


const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    const query = req.query;
    if(Object.keys(query).length > 0) {
        if(Object.keys(query).includes("search")) {
            const recipes = await getRecipeByQuery(query);
            res.json(recipes);
        }
    } else {
        const recipes = await getAllRecipes();
        res.json(recipes);
}
});



export default router;
