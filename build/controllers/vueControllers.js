"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.getOne = exports.getAll = void 0;
// ! ---- VUE CONTROLLERS ----
const pseudoDb_1 = __importDefault(require("../pseudoDb"));
const itemsArr = pseudoDb_1.default.vue;
function getAll() {
    return itemsArr;
}
exports.getAll = getAll;
// if wrong id, returns 0
function getOne(id) {
    // even tho i got a number, could be invalid id
    if (typeof id === "number")
        return itemsArr.find((e) => e.id === id) || 0;
    return 0;
}
exports.getOne = getOne;
// if wrong id returns 0
function deleteOne(id) {
    const removeIdx = itemsArr.findIndex((e) => e.id === id);
    const foundTask = itemsArr.splice(removeIdx, 1);
    // empty [] if invalid idx in splice
    if (typeof id === "number" && removeIdx >= 0) {
        return foundTask.length ? foundTask[0] : 0;
    }
    return 0;
}
exports.deleteOne = deleteOne;
