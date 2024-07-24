import { Sequelize} from "sequelize-typescript";
const config = require("../../config/database.js"); // Use require instead of import
import Post from "../models/post.model";
import Commentary from "../models/commentary.model";

export const bootstrap = () => {
    const db = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            host: config.host,
            dialect: config.dialect,
            port: config.port,
            models: [Post, Commentary],
            logging: false
        }
    );
}