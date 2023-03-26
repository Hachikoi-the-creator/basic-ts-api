// ! ---- VUE CONTROLLERS ----
import pseudoDb, { TaskT } from "../pseudoDb";
import { UnknownTask } from "../types/ClientReq";
import getRandomNumber from "../utils/getRandom";
const itemsArr: TaskT[] = pseudoDb.vue;

export function getAllVUE(): TaskT[] | [] {
  return itemsArr;
}

// if wrong id, returns 0
export function getOneVUE(id: unknown): TaskT | 0 {
  // even tho i got a number, could be invalid id
  if (typeof id === "number") return itemsArr.find((e) => e.id === id) || 0;
  return 0;
}

export function addOneVUE(taskData: UnknownTask): TaskT | 0 {
  // any of those is undefined return 0
  const { text, day, reminder } = taskData;
  const validInputs =
    typeof text === "string" &&
    typeof day === "string" &&
    typeof reminder === "boolean";
  if (!validInputs) return 0;

  const existingIds = itemsArr.map((e) => e.id);
  const rndId = getRandomNumber(existingIds);
  const newTask = { id: rndId, text, day, reminder };
  itemsArr.push(newTask);

  return newTask;
}

// if wrong id returns 0
export function deleteOneVUE(id: unknown): TaskT | 0 {
  const removeIdx = itemsArr.findIndex((e) => e.id === id);
  const foundTask = itemsArr.splice(removeIdx, 1);

  // empty [] if invalid idx in splice
  if (typeof id === "number" && removeIdx >= 0) {
    return foundTask.length ? foundTask[0] : 0;
  }

  return 0;
}
