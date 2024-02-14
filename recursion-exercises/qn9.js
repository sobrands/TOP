function replicate(times, num) {
  if (times <= 0) return [];

  return [num].concat(replicate(times-1, num));
}

console.log(replicate(3, 5));
console.log(replicate(1, 69));
console.log(replicate(-2, 6));