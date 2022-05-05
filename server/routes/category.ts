import express, {Request, Response, json}  from 'express';
import {getAllcategory, getRecipesByCategory} from '../db/category';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const categories = await getAllcategory();
    res.json(categories);
});

router.get ('/:category', async (req: Request, res: Response) => {
    //req.params is an object that contains all the parameters in the url
    if(req.params.category) {
        const recipes = await getRecipesByCategory(req.params.category);
        res.json(recipes);
    }
});

export default router;