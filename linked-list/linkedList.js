function Node(value, nextNode) {
  const newNode = {
    data: value,
    next: nextNode
  }

  return newNode;
}

function LinkedList() {
  let head = null;

  function append(value) {
    if (!head) {
      head = Node(value, null);
    } else {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = Node(value, null);
    }
  }

  function prepend(value) {
    head = Node(value, head);
  }

  function pop() {
    let current = head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  function insertAt(val, index) {
    let current = head;
    let prev = null;
    let idx = 0;

    while (current !== null) {
      if (idx === index) {
        const newNode = Node(val, current);
        if (prev !== null) {
          prev.next = newNode;
        } else {
          head = newNode;
        }
        return;
      }
      idx++;
      prev = current;
      current = current.next;
    }
    console.log('Index out of range!');
  }

  function removeAt(index) {
    let current = head;
    let prev = null;
    let idx = 0;

    while (current !== null) {
      if (idx === index) {
        if (prev !== null) {
          prev.next = current.next;
        } else {
          head = current.next;
        }
        return;
      }
      idx++;
      prev = current;
      current = current.next;
    }
    console.log('Index out of range!');
  }

  function size() {
    let current = head;
    let size = 0;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  function at(index) {
    let current = head;
    let idx = 0;
    while (current !== null) {
      if (idx === index) return current;
      current = current.next;
      idx++;
    }
    return "Index is out of range!";
  }

  function contains(value) {
    let current = head;
    while (current !== null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  function find(value) {
    let current = head;
    let idx = 0;
    while (current !== null) {
      if (current.data === value) return idx;
      current = current.next;
      idx++;
    }
    return null;
  }

  function toString() {
    let current = head;
    let res = '';
    while (current !== null) {
      res += `( ${current.data} ) => `;
      current = current.next;
    }
    res += 'null';
    console.log(res);
  }

  return {
    append,
    prepend,
    pop,
    insertAt,
    removeAt,
    size,
    getHead,
    getTail,
    at,
    contains,
    find,
    toString,
  }
}

const linkedList = LinkedList();
linkedList.append(3);
linkedList.prepend(1);
linkedList.append(2);
linkedList.pop();
linkedList.append(4);
linkedList.prepend(49);
linkedList.insertAt(33, 2);
linkedList.removeAt(2);
linkedList.toString();
console.log("Size of linkedList is:", linkedList.size());