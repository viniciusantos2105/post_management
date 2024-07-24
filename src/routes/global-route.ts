// src/routes/global-route.ts
import { Router } from "express";
import postRoute from "./post-route";
import commentaryRoute from "./commentary-route";

const globalRoute = Router();

globalRoute.use("/api/post", postRoute);
globalRoute.use("/api/post/:postId/commentary", commentaryRoute);

export default globalRoute;