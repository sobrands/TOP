function totalIntegers(arr) {
  let sum = 0;
  for (x of arr) {
    if (Array.isArray(x)) {
      sum += totalIntegers(x);
    }
    else if (typeof x === 'number') {
      sum++;
    }
  }
  return sum;
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));