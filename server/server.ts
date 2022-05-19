import express, { Request, Response, json } from 'express';
import mongoose from 'mongoose';
import recipeRouter from './routes/recipe';
import categoryRouter from './routes/category';
import cors from 'cors'


const url = "mongodb+srv://idan:lPNQkHrQLnDPSOEr@cluster0.stdjt.mongodb.net/recipesPage?retryWrites=true&w=majority"

// mongoose.connect(url)

if (process.env.MONGO_DB_CONNECTION_STRING) {
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => console.log('listening to port: ' + port));
    })
} else {
    console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
}
    // .then( () => {
    //     console.log('Connected to the database ')
    // })
    // .catch( (err) => {
    //     console.error(`Error connecting to the database. n${err}`);
    // })

const app = express();
app.use(json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {     
    res.send('HOOOO');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.use('/recipes', recipeRouter);
app.use('/category', categoryRouter);
