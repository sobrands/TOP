function mergeArr(leftArr, rightArr) {
  let resArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      resArr.push(leftArr.shift());
    } else {
      resArr.push(rightArr.shift());
    }
  }

  if (leftArr.length > 0) resArr = resArr.concat(leftArr);
  else if (rightArr.length > 0) resArr = resArr.concat(rightArr);

  return resArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return [arr.shift()];
  } else {
    // Merge left half
    let leftArr = mergeSort(arr.slice(0, arr.length/2));
    let rightArr = mergeSort(arr.slice(arr.length/2));
    
    return mergeArr(leftArr, rightArr);
  }
}

console.log(mergeSort([3,2,1,13,8,5,0,1]));
console.log(mergeSort([105, 79, 100, 110]));