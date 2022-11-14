class TreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    //add a value to the tree while maintaing the sortedness of the tree
    add(value) {
      if (this.root === null) {
        this.root = new TreeNode(value);
      } else {
        this._add(this.root, value);
      }
    }
    _add(node, value) {
      if (value < node.data && node.left == null) {
        node.left = new TreeNode(value);
      } else if (value > node.data && node.right == null) {
        node.right = new TreeNode(value);
      } else if (value < node.data) {
        this._add(node.left, value);
      } else {
        this._add(node.right, value);
      }
    }
    
   
    validate() {
      return this.isV(this.root, null, null);
    }
    isV(node, min, max) {
    
      // at evry step we update max value if we move to left
      // starting point for root node no validation we will do and we will skip first two statmet strting
      if (max !== null && node.data > max) {
        return false;
      }
      //right side values should be greater
      if (min !== null && node.data < min) {
        return false;
      }
      // if node exist on left and if validate returns false then something returned false we need
      //flip the value and return false
      if (node.left && !this.isV(node.left, min, node.data)) {
        return false;
      }
      if (node.right && !this.isV(node.right, node.data, max)) {
        return false;
      }
  
      return true;
    }
  }
  
  let tree = new BinarySearchTree();
  tree.add(52);
  tree.add(45);
  tree.add(42);
  tree.add(49);
  tree.add(65);
  tree.add(54);
  tree.add(55);
  
  
  console.log("IsBinarySearchTree ", tree.validate());
  
  