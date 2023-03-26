import { Router } from "express";
import {
  createOneVUE,
  deleteOneVUE,
  getAllVUE,
  getOneVUE,
  updateOneVUE,
} from "../controllers/vueControllers";

const vueRouter = Router();

vueRouter.get("/", (req, res) => {
  const allTasks = getAllVUE();
  res.send(allTasks);
});

vueRouter.get("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;

  const foundTask = getOneVUE(numId);

  res.status(200).send(foundTask || "naur-found");
});

vueRouter.post("/", (req, res) => {
  // can't find a better way to make this other than any :c
  const taskData: any = req.body;
  const { text, day, reminder } = taskData;
  const addedTask = createOneVUE({ text, day, reminder });

  res.status(201).send(addedTask || "invalid/missing-data");
});

// update
vueRouter.put("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const taskData = req.body;
  const numId: number = +id;

  const updatedTask = updateOneVUE(numId, taskData);

  res.status(200).send(updatedTask || "naur-found-update");
});

vueRouter.delete("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;
  const deletedTask = deleteOneVUE(numId);

  res.status(201).send(deletedTask || "naur-found-delete");
  // res.send(allTasks); even tho allTask could have been 0 but got no TS error...
});

export default vueRouter;
