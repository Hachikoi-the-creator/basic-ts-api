import { Router } from "express";
import {
  deleteOneNG,
  getAllNG,
  getOneNG,
} from "../controllers/angularControllers";

const angularRouter = Router();

angularRouter.get("/", (req, res) => {
  const allTasks = getAllNG();
  res.send(allTasks);
});

angularRouter.get("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;

  const allTasks = getOneNG(numId);

  res.status(200).send(allTasks || "naur-found");
});

angularRouter.delete("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;
  const deletedTask = deleteOneNG(numId);

  res.status(201).send(deletedTask || "naur-found");
  // res.send(allTasks); even tho allTask could have been 0 but got no TS error...
});

export default angularRouter;
