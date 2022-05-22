import express, { Application, Request, Response } from 'express';
import 'dotenv/config';
import { DB_CONFIG } from './src/config/db';
const mongoose = require('mongoose');
const Todos = require('./src/schema/todos');

const app: Application = express();

const { dbUrl, connectionOptions } = DB_CONFIG as any;

mongoose.connect(dbUrl, connectionOptions)
.then(() => console.log('MongoDB connected successfully'))
.catch((err: any) => console.log("DB connection errored: ", err));

app.get('/', (req: Request, res: Response) => {
    res.json({
        "hello": "world"
    })
});

const PORT: number = Number(process.env.PORT) || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, (): void => console.log(`Server started on ${PORT}`));