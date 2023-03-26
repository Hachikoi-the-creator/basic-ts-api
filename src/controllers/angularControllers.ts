// ! ---- ANGULAR CONTROLLERS ----
import pseudoDb, { TaskT } from "../pseudoDb";
import { UnknownTask } from "../types/ClientReq";
import getRandomNumber from "../utils/getRandom";
import { validTaskAttrs } from "../utils/taskValidators";

const itemsArr: TaskT[] = pseudoDb.angular;

// * GET ALL
export function getAllNG(): TaskT[] | [] {
  return itemsArr;
}

// * GET 1
export function getOneNG(id: number): TaskT | 0 {
  // if wrong id, returns 0
  if (typeof id === "number") {
    // even tho i got a number, could be invalid id
    const foundTask = itemsArr.find((e) => e.id === id);
    return foundTask?.day ? foundTask : 0;
  }

  return 0;
}

// * CREATE/ADD 1
export function createOneNG(taskData: UnknownTask): TaskT | 0 {
  // any of those is undefined return 0
  if (!validTaskAttrs(taskData)) return 0;

  // im sure it is a valid task because of the if above
  const { text, day, reminder } = taskData as TaskT;

  const existingIds = itemsArr.map((e) => e.id);

  const rndId = getRandomNumber(existingIds);
  console.log("testin uniquense controller", existingIds, rndId);
  const newTask = { id: rndId, text, day, reminder };

  itemsArr.push(newTask);

  return newTask;
}

// * DELETE 1
export function updateOneNG(id: number, taskUptData: TaskT): TaskT | 0 {
  let wasFound: boolean = false;

  itemsArr.forEach((task) => {
    if (task.id === id) {
      // not as good lookinng but huge perfomance improvements
      if (validTaskAttrs(taskUptData)) {
        // does indeed work by refenrece & did not like the splice!
        task.text = taskUptData.text;
        task.reminder = taskUptData.reminder;
        task.day = taskUptData.day;
        wasFound = true;
      }
    }
  });

  return wasFound
    ? {
        id,
        text: taskUptData.text,
        reminder: taskUptData.reminder,
        day: taskUptData.day,
      }
    : 0;
}

// * DELETE 1
// if wrong id returns 0
export function deleteOneNG(id: number): TaskT | 0 {
  const removeIdx = itemsArr.findIndex((e) => e.id === id);
  const foundTask = itemsArr.splice(removeIdx, 1);

  // empty [] if invalid idx in splice
  if (typeof id === "number" && removeIdx >= 0) {
    return foundTask.length ? foundTask[0] : 0;
  }

  return 0;
}
