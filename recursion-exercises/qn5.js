function productofArray(arr) {
  if (arr.length === 0) return 1;

  return arr.shift() * productofArray(arr);
}

console.log(productofArray([1,2,3]));
console.log(productofArray([1,2,3,10]));