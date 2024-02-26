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

  prettyPrint(root);

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
}

const binarySearchTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);