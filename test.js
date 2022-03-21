function plusMinus(arr) {
  let n = arr.length;

  let sums = [];
  for (let i = 0; i < n; i++) {
    // let currentNumber = arr[i];

    // sum of the rest
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        sum += arr[j];
      }
    }
    sums.push(sum);
  }

  console.log(Math.min(...sums), Math.max(...sums));
}
plusMinus([1, 2, 3, 4, 5]);
console.log("\n<><><<><>><<> \n");
// plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
