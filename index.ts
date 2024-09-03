import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create Express APP
const app: Express= express();
const port: string | number = process.env.PORT || 8000;

// define the first Route of APP
app.get('/', (req:Request, res:Response) => {
    // send hello word
    res.send('Welcome to api RestFul: APP Express + nodemon + jest + TS + Swagger + Mongoose');
});

app.get('/hello', (req:Request, res:Response) => {
    // send hello word
    res.send('Welcome to GET Route: Hello!');
});

//Execute APP and Listen Request to PORT
app.listen(port, () => console.log(`EXPRESS SERVER: Running at http://localhost:${port}`));