export default function getRandomNumber(existingNums: number[]): number {
  let nonCollideNum = 0;
  let exp = 100;
  let counter = 0;

  while (existingNums.includes(nonCollideNum)) {
    nonCollideNum = Math.round(Math.random() * exp);
    counter++;

    // too many iterations most likely need another x10
    if (counter >= 20) {
      exp *= 10;
      counter = 0;
    }
  }

  return nonCollideNum;
}
