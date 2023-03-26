import { UnknownTask } from "../types/ClientReq";

export function validTaskAttrs(taskObj: UnknownTask): Boolean {
  const { text, day, reminder } = taskObj;

  const validInputs =
    typeof text === "string" &&
    typeof day === "string" &&
    typeof reminder === "boolean";

  return validInputs;
}
