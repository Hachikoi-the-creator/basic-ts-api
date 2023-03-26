import { Router } from "express";
import angularRouter from "./angularRoutes";
import vueRouter from "./vueRoutes";

const mainRouter = Router();

mainRouter.get("/pin", (req, res) => {
  res.status(200).send("i'm up and working bruv");
});

mainRouter.use("/angular", angularRouter);
mainRouter.use("/vue", vueRouter);

export default mainRouter;
