export default function getRandomNumber(existingNums: number[]): number {
  let nonCollideNum = existingNums[0] || 13;
  let exp = 100;
  let counter = 0;

  while (existingNums.includes(nonCollideNum)) {
    // avoid 0, thus +1

    nonCollideNum = Math.round(Math.random() * exp) + 1;
    counter++;

    // too many iterations most likely need another x10
    if (counter >= 20) {
      exp *= 10;
      counter = 0;
    }
  }

  return nonCollideNum;
}
