function Node(val) {
  let data = val;
  let left = null;
  let right = null;

  return {
    data,
    left,
    right,
  }
} 

function Tree(arr) {
  let root = buildTree(arr);

  function createBst(arr, start, end) {
    if (start > end) {
      return null;
    }

    const mid = parseInt((start + end) / 2);
    const root = Node(arr[mid]);
    root.left = createBst(arr, start, mid-1);
    root.right = createBst(arr, mid+1, end);

    return root;
  }

  function buildTree(arr) {
    // Remove duplicates
    arr = [...new Set(arr)];
    // Sort array 
    arr.sort((a,b) => a - b);
    
    // Find middle of array
    const start = 0;
    const end = arr.length -1;
    const mid = parseInt((start + end) / 2);
    const root = Node(arr[mid]);
    root.left = createBst(arr, start, mid-1);
    root.right = createBst(arr, mid+1, end);

    return root;
  }

  function insertVal(root, value) {
    // When node is empty
    if (root === null) {
      node = Node(value);
      return node;
    }

    // Do not allow duplicates
    if (root.data === value) {
      console.log("Value already exists in tree!");
      return root;
    }

    // Start recursion
    if (value < root.data) {
      root.left = insertVal(root.left, value);
      return root;
    } 
    else if (value > root.data) {
      root.right = insertVal(root.right, value);
      return root;
    }
  }

  function insert(value) {
    root = insertVal(root, value);
  }

  function deleteVal(root, value) {
    // Base case
    if (root === null) {
      return root;
    }

    // Recursive calls if value not found yet
    if (value < root.data) {
      root.left = deleteVal(root.left, value);
      return root;
    }
    else if (value > root.data) {
      root.right = deleteVal(root.right, value);
      return root;
    }

    // Value matches
    // Root node only has one child
    if (root.left === null) {
      let temp = root.right;
      delete root;
      return temp;
    }
    else if (root.right === null) {
      let temp = root.left;
      delete root;
      return temp;
    } else { // Both children nodes exist
      // Find in-order successor
      let succParent = root;

      // Find left most node of right subtree (next biggest number)
      let succ = root.right;
      while (succ.left !== null) {
        succParent = succ;
        succ = succ.left;
      }

      // Replace root value with succesor's value
      root.data = succ.data;

      // Delete succesor and let parents inherit any children nodes
      if (succParent !== root) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      delete succ;
      return root;
    }

  }

  function deleteItem(value) {
    root = deleteVal(root, value);
  }

  function findNode(root, value) {
    if (root === null) {
      console.log("Value does not exist in tree!");
      return null;
    }

    if (root.data === value) {
      return root;
    } else if (value < root.data) {
      return findNode(root.left, value);
    } else if (value > root.data) {
      return findNode(root.right, value);
    }
  }

  function find(value) {
    return findNode(root, value);
  }

  function levelOrder(callback) {
    let queue = [];
    let res = [];
    queue.push(root);

    while (queue.length > 0) {
      // Dequeue first node
      const currentNode = queue.shift();

      if (!callback) {
        res.push(currentNode.data);
      } else {
        callback(currentNode);
      }

      // Enqueue child nodes
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return res;
  }

  function traverseNodeInOrder(node, callback) {
    // Base case
    if (node === null) {
      return [];
    }

    if (callback) {
      callback(node);
    }

    // Do recursion
    return traverseNodeInOrder(node.left, callback)
      .concat([node.data])
      .concat(traverseNodeInOrder(node.right, callback));
  }

  function inOrder(callback) {
    console.log(traverseNodeInOrder(root, callback));
  }

  function traverseNodePreOrder(node, callback) {
    // Base case
    if (node === null) {
      return [];
    }

    if (callback) {
      callback(node);
    }

    // Do recursion
    return [node.data]
      .concat(traverseNodePreOrder(node.left, callback))
      .concat(traverseNodePreOrder(node.right, callback));
  }

  function preOrder(callback) {
    console.log(traverseNodePreOrder(root, callback));
  }

  function traverseNodePostOrder(node, callback) {
    // Base case
    if (node === null) {
      return [];
    }

    if (callback) {
      callback(node);
    }

    // Do recursion
    return (traverseNodePostOrder(node.left, callback))
      .concat(traverseNodePostOrder(node.right, callback))
      .concat([node.data]);
  }

  function postOrder(callback) {
    console.log(traverseNodePostOrder(root, callback));
  }

  function height(node) {
    // Base case
    if (node === null) {
      return -1;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  function findDepth(node, root) {
    if (node === root) {
      return 0;
    }

    if (node.data < root.data) {
      return 1 + findDepth(node, root.left);
    }
    else if (node.data > root.data) {
      return 1 + findDepth(node, root.right);
    }
  }

  function depth(node) {
    return findDepth(node, root);
  }

  function isBalanced() {
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    if (!(Math.abs(rightHeight - leftHeight) > 1)) {
      return true;
    } else {
      return false;
    }
  }

  function rebalance() {
    let arr = levelOrder();
    root = buildTree(arr);
  }

  function prettyPrint (node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return {
    root,
    prettyPrint,
    insert,
    deleteItem,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  }
}

function checkBalance(binarySearchTree) {
  if (binarySearchTree.isBalanced()) {
    console.log(binarySearchTree.levelOrder());
    binarySearchTree.inOrder();
    binarySearchTree.preOrder();
    binarySearchTree.postOrder();
  } else {
    console.log('Binary search tree is not balanced!');
    binarySearchTree.rebalance();
  }
}

const binarySearchTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 22, 16]);
checkBalance(binarySearchTree);
binarySearchTree.insert(104);
binarySearchTree.insert(105);
binarySearchTree.insert(115);
binarySearchTree.insert(120);
binarySearchTree.insert(160);
checkBalance(binarySearchTree);
checkBalance(binarySearchTree);