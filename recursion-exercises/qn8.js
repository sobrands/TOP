function SumSquares(arr) {
  let sum = 0;

  for (x of arr) {
    if (Array.isArray(x)) {
      sum += SumSquares(x);
    }
    else if (typeof x === 'number') {
      sum += x * x;
    }
  }
  return sum;
}


console.log(SumSquares([1,2,3]));
console.log(SumSquares([[1,2], 3]));
console.log(SumSquares([[[[[[[[[1]]]]]]]]]));
console.log(SumSquares([10,[[10],10],[10]]));