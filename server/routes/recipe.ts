import express, {Request, Response, json}  from 'express';
import {getAllRecipes, getRecipeByQuery, getRecipeById, pushRatingById} from '../db/recipes';


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
    const recipe = await getRecipeById(req.params.id);
    res.json(recipe);
});

router.post('/:id/ratings', async (req: Request, res: Response) => {
    const gottenRecipe = await pushRatingById(req.params.recipeId, req.body.rating);
    res.status(200).json(gottenRecipe);
});





export default router;
