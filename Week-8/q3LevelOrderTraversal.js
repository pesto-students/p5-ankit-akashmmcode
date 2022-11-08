class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class binarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      let temp = this.root;
      while (true) {
        if (newNode.value === temp.value) return undefined;
        if (newNode.value < temp.value) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          }
          temp = temp.left;
        } else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  
    levelOrderTraversal() {
      let currentNode = this.root;
      let results = [];
      let queue = [];
      queue.push(currentNode);
  
      while (queue.length) {
        currentNode = queue.shift();
        results.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      return results;
    }
  }
  
  let myTree = new binarySearchTree();
  myTree.insert(47);
  myTree.insert(21);
  myTree.insert(76);
  myTree.insert(18);
  myTree.insert(27);
  myTree.insert(52);
  myTree.insert(82);
  console.log("Level Order Traversal", myTree.levelOrderTraversal());