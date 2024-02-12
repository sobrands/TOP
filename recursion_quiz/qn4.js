function all(arr, cb) {
  let copy = arr.slice();

  if (copy.length === 0) return true;

  if (cb(copy[0])) {
    copy.shift();
    return all(copy, cb);
  } else {
    return false;
  }
}

const allAreLessThanSeven = all([1,2,9], (num) => {
  return num < 7;
});

console.log(allAreLessThanSeven);