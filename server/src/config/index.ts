import express from 'express';
//import { PORT } from './config.js';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    res.send('<h1>Welcome to the server</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})  

