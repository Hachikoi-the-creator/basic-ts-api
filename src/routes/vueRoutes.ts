import { Router } from "express";
import { deleteOne, getAll, getOne } from "../controllers/vueControllers";

const vueRouter = Router();

vueRouter.get("/", (req, res) => {
  const allTasks = getAll();
  res.send(allTasks);
});

vueRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const allTasks = getOne(id);

  res.send(allTasks);
});

vueRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const allTasks = deleteOne(id);

  res.send(allTasks);
});

export default vueRouter;
