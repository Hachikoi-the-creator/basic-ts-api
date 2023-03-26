import { Router } from "express";
import {
  createOneNG,
  deleteOneNG,
  getAllNG,
  getOneNG,
  updateOneNG,
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
  const addedTask = createOneNG({ text, day, reminder });

  res.status(201).send(addedTask || "invalid/missing-data");
});

// update
angularRouter.put("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const taskData = req.body;
  const numId: number = +id;

  const updatedTask = updateOneNG(numId, taskData);

  res.status(200).send(updatedTask || "naur-found-update");
});

angularRouter.delete("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;
  const deletedTask = deleteOneNG(numId);

  res.status(201).send(deletedTask || "naur-found-delete");
  // res.send(allTasks); even tho allTask could have been 0 but got no TS error...
});

export default angularRouter;
