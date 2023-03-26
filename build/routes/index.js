"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const angularRoutes_1 = __importDefault(require("./angularRoutes"));
const vueRoutes_1 = __importDefault(require("./vueRoutes"));
const mainRouter = (0, express_1.Router)();
mainRouter.get("/pin", (req, res) => {
    res.status(200).send("i'm up and working bruv");
});
mainRouter.use("/angular", angularRoutes_1.default);
mainRouter.use("/vue", vueRoutes_1.default);
exports.default = mainRouter;
