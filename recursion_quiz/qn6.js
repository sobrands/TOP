function contains(obj, val) {
  for (key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      return contains(obj[key], val)
    } else {
      if (obj[key] === val) return true;
    }
  }
  return false;
}

const nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}


console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, 'foo'));