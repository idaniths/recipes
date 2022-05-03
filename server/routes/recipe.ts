import express, {Request, Response, json}  from 'express';
import {getAllRecipes} from '../db/recipes';


const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    const recipes = await getAllRecipes();
    res.json(recipes);
});



export default router;
