// ! ---- ANGULAR CONTROLLERS ----
import pseudoDb, { TaskT } from "../pseudoDb";
const itemsArr: TaskT[] = pseudoDb.angular;

export function getAllNG(): TaskT[] | [] {
  return itemsArr;
}

// if wrong id, returns 0
export function getOneNG(id: unknown): TaskT | 0 {
  // even tho i got a number, could be invalid id
  if (typeof id === "number") {
    const foundTask = itemsArr.find((e) => e.id === id);
    return foundTask?.day ? foundTask : 0;
  }

  return 0;
}

// if wrong id returns 0
export function deleteOneNG(id: unknown): TaskT | 0 {
  const removeIdx = itemsArr.findIndex((e) => e.id === id);
  const foundTask = itemsArr.splice(removeIdx, 1);

  // empty [] if invalid idx in splice
  if (typeof id === "number" && removeIdx >= 0) {
    return foundTask.length ? foundTask[0] : 0;
  }

  return 0;
}
