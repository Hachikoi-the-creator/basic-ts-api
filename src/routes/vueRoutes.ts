import { Router } from "express";
import {
  addOneVUE,
  deleteOneVUE,
  getAllVUE,
  getOneVUE,
} from "../controllers/vueControllers";

const vueRouter = Router();

vueRouter.get("/", (req, res) => {
  const allTasks = getAllVUE();
  res.send(allTasks);
});

vueRouter.get("/:id", (req, res) => {
  const id: undefined | string = req.params.id;
  const numId: number = +id;
  const allTasks = getOneVUE(numId);

  res.status(201).send(allTasks || "naur-found");
});

vueRouter.post("/", (req, res) => {
  // can't find a better way to make this other than any :c
  const taskData: any = req.body;
  const { text, day, reminder } = taskData;
  const addedTask = addOneVUE({ text, day, reminder });

  res.status(201).send(addedTask || "invalid/missing-data");
});

vueRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedTask = deleteOneVUE(id);

  res.status(201).send(deletedTask || "naur-found");
});

export default vueRouter;
