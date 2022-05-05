import express, {Request, Response, json}  from 'express';
import {getAllRecipes, getRecipeByQuery, getRecipeById} from '../db/recipes';


const router = express.Router();

router.get ('/', async (req: Request, res: Response) => {
    if(req.query.search) {
        const recipes = await getRecipeByQuery(req.query);
        res.json(recipes);
    } else {
        const recipes = await getAllRecipes();
        res.json(recipes);
    }
});


router.get ('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const recipe = await getRecipeById(id);
    res.json(recipe);
});

router.get('/')



export default router;
