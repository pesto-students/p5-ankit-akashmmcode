class TreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
    height() {
      return this._height(this.root);
    }
    _height(node) {
      if (node == null) {
        return 0;
      }
  
      let leftHeight = this._height(node.left);
      let rightHeight = this._height(node.right);
      if (leftHeight > rightHeight) {
        return 1 + leftHeight;
      } else {
        return 1 + rightHeight;
      }
    }
  }
  
  let n1 = new TreeNode(32);
  let n2 = new TreeNode(92);
  let n3 = new TreeNode(13);
  let n4 = new TreeNode(44);
  let n5 = new TreeNode(87);
  
  let tree = new Tree();
  tree.root = n1;
  n1.left = n2;
  n1.right = n3;
  n2.left = n4;
  n2.right = n5;
  
  console.log("Depth Of Tree", tree.height() + 1);