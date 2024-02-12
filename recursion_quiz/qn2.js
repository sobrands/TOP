function power(num, pow) {
  if (pow === 0) {
    return 1;
  } else {
    return num * power(num, pow-1);
  }
}

console.log(power(2,4));
console.log(power(2,3));