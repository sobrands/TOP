function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
  return word.split('').reverse().join('');
}

const calculator = (() => {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide
  }

});

const caesarCipher = ((word, shiftFactor) => {
  const keys = '.,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  
  function shiftKey(letter) {
    let index = keys.indexOf(letter.toUpperCase()) + shiftFactor;
  
    if (index >= keys.length) {
      // Excess will start from first letter because of wrapping
      index = (index - keys.length) % keys.length - 1;
    }

    return keys.charAt(index);
  }

  for (let i = 0; i < word.length; i++) {
    result = result.concat(shiftKey(word.charAt(i))); 
  }
  
  return result;
});

function analyzeArray(arr) {
  const res = {};

  function average(arr) {
    return arr.reduce((prev, current) => prev + current, 0) / arr.length;
  }

  function min(arr) {
    return Math.min(...arr);
  }

  function max(arr) {
    return Math.max(...arr);
  }

  res['average'] = average(arr);
  res['min'] = min(arr);
  res['max'] = max(arr);
  res['length'] = arr.length;

  return res;
}

export {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
}
