"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const angularControllers_1 = require("../controllers/angularControllers");
const angularRouter = (0, express_1.Router)();
angularRouter.get("/", (req, res) => {
    const allTasks = (0, angularControllers_1.getAllNG)();
    res.send(allTasks);
});
angularRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const numId = +id;
    const allTasks = (0, angularControllers_1.getOneNG)(numId);
    res.status(200).send(allTasks || "naur-found");
});
angularRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    const numId = +id;
    const deletedTask = (0, angularControllers_1.deleteOneNG)(numId);
    res.status(201).send(deletedTask || "naur-found");
    // res.send(allTasks); even tho allTask could have been 0 but got no TS error...
});
exports.default = angularRouter;
