import express from 'express';
import healthCheckRouter from './routes/index.js';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({
  override: true,
  path: path.join(__dirname,'development.env')
});

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DATABASE_SYS,
  logging: false
});

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());

healthCheckRouter(app);


app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`);
});

export default sequelize;