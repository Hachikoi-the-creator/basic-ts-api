"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vueControllers_1 = require("../controllers/vueControllers");
const vueRouter = (0, express_1.Router)();
vueRouter.get("/", (req, res) => {
    const allTasks = (0, vueControllers_1.getAll)();
    res.send(allTasks);
});
vueRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const allTasks = (0, vueControllers_1.getOne)(id);
    res.send(allTasks);
});
vueRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const allTasks = (0, vueControllers_1.deleteOne)(id);
    res.send(allTasks);
});
exports.default = vueRouter;
