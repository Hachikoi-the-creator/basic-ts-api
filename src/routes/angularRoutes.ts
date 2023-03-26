import { Router } from "express";
import {
  addOneNG,
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

  const foundTask = getOneNG(numId);

  res.status(200).send(foundTask || "naur-found");
});

angularRouter.post("/", (req, res) => {
  // can't find a better way to make this other than any :c
  const taskData: any = req.body;
  const { text, day, reminder } = taskData;
  const addedTask = addOneNG({ text, day, reminder });

  res.status(201).send(addedTask || "invalid/missing-data");
});

angularRouter.delete("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;
  const deletedTask = deleteOneNG(numId);

  res.status(201).send(deletedTask || "naur-found");
  // res.send(allTasks); even tho allTask could have been 0 but got no TS error...
});

export default angularRouter;
