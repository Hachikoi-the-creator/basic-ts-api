function getRandomNumber(existingNums) {
  let nonCollideNum = 0;
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

const testing = Array(40)
  .fill(1)
  .map((_) => getRandomNumber([0, 1, 2]));
console.log(testing);
