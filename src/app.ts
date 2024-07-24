import express from 'express'
import globalRoute from "./routes/global-route";
import {bootstrap} from "./config/sequelize";
import errorHandler from "./middlewares/error-handler";
import 'reflect-metadata';

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(globalRoute);
app.use(errorHandler);

app.listen(port, () => {
    bootstrap()
    console.log(`Server is running at http://localhost:${port}`);
});