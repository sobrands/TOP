function HashMap() {
  let hashMapSize = 16;
  let buckets = Array(hashMapSize).fill(null).map(() => []);
  const loadFactor = 0.75;

  function checkLoadFactor() {
    const capacity = buckets.reduce((accumulator, current) => {
      if (current.length !== 0) {
        accumulator++;
      }
    }, 0);

    return capacity / buckets.length;
  }

  function handleLoadFactor() {
    if (checkLoadFactor < loadFactor) {
      return;
    }

    currentEntries = entries();

    // Create a new buckets array with twice the size
    hashMapSize *= 2;
    buckets = Array(hashMapSize).fill(null).map(() => []);

    // Populate new buckets with current entries
    currentEntries.forEach((entry) => set(entry[0], entry[1]));
  }

  function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % hashMapSize;
    }
 
    return hashCode;
  }
  
  function set(key, value) {
    const hashKey = hash(key);
    if (hashKey < 0 || hashKey >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    // Check if key already exists in buckets
    // If so, replace value
    // Else, add new key
    const keyExists = buckets[hashKey].findIndex((element) => {
      element.key === key;
    })
    if (keyExists === -1) {
      buckets[hashKey].push({key, value})
      handleLoadFactor();
    } else {
      buckets[hashKey][keyExists].value = value;
    }
  }

  function get(key) {
    const hashKey = hash(key);
    const found = buckets[hashKey].find((element) => element.key === key);
    if (found !== undefined) {
      return found.value;
    } else {
      return null;
    }
  }

  function has(key) {
    if (get(key) !== null) {
      return true;
    } else {
      return false;
    }
  }

  function remove(key) {
    if (!has(key)) {
      return false;
    }

    const hashKey = hash(key);
    const index = buckets[hashKey].findIndex((element) => element.key === key);
    buckets[hashKey].splice(index,1);
    return true;
  }

  function length() {
    const length = buckets.reduce(
      (accumulator, current) => accumulator + current.length,
      0,
    );

    return length;
  }

  function clear() {
    buckets = Array(hashMapSize).fill(null).map(() => []);
  }

  function keys() {
    let keyList = [];
    buckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        keyList.push(pair.key);
      })
    })

    return keyList;
  }

  function values() {
    let valueList = [];
    buckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        valueList.push(pair.value);
      })
    })

    return valueList;
  }

  function entries() {
    let entryList = [];
    buckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        entryList.push([pair.key, pair.value]);
      })
    })

    return entryList;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  }
}

const hashMap = HashMap()
hashMap.set('tryme', 203);
hashMap.set('tryu', 201010);
hashMap.set('tryUs', 'trying');
if (hashMap.has('tryme')) {
  console.log(hashMap.get('tryme'));
}
console.log(hashMap.length());
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());