"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneNG = exports.getOneNG = exports.getAllNG = void 0;
// ! ---- ANGULAR CONTROLLERS ----
const pseudoDb_1 = __importDefault(require("../pseudoDb"));
const itemsArr = pseudoDb_1.default.angular;
function getAllNG() {
    return itemsArr;
}
exports.getAllNG = getAllNG;
// if wrong id, returns 0
function getOneNG(id) {
    // even tho i got a number, could be invalid id
    if (typeof id === "number") {
        const foundTask = itemsArr.find((e) => e.id === id);
        return (foundTask === null || foundTask === void 0 ? void 0 : foundTask.day) ? foundTask : 0;
    }
    return 0;
}
exports.getOneNG = getOneNG;
// if wrong id returns 0
function deleteOneNG(id) {
    const removeIdx = itemsArr.findIndex((e) => e.id === id);
    const foundTask = itemsArr.splice(removeIdx, 1);
    // empty [] if invalid idx in splice
    if (typeof id === "number" && removeIdx >= 0) {
        return foundTask.length ? foundTask[0] : 0;
    }
    return 0;
}
exports.deleteOneNG = deleteOneNG;
