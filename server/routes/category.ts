import express, {Request, Response, json}  from 'express';
import {getAllcategory} from '../db/category';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const categories = await getAllcategory();
    res.json(categories);
});

export default router;