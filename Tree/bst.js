class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];

    queue.push(this.root);
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  min() {
    if (this.root) {
      let current = this.root;

      while (current.left) {
        current = current.left;
      }
      console.log(`Minimum value in the Tree is ${current.value}`);
    } else {
      console.log(`Tree is Empty.`);
    }
  }

  max() {
    if (this.root) {
      let current = this.root;

      while (current.right) {
        current = current.right;
      }
      console.log(`Maximum value in the Tree is ${current.value}`);
    } else {
      console.log(`Tree is Empty.`);
    }
  }

  delete(value) {
    if (!this.root) {
      console.log(`Tree is Empty.`);
    } else {
      let current = this.root;
      let parent = null;

      while (current) {
        parent = current;

        if (current.value > value) {
          current = current.left;
        } else if (current.value < value) {
          current = current.right;
        } else if (current.value === value) {
          if (!current.left) {
            if (!parent) {
              this.root = current.right;
            } else if (current === parent.left) {
              parent.left = current.right;
            } else {
              parent.right = current.right;
            }
            return;
          } else if (!current.right) {
            if (!parent) {
              this.root = current.left;
            } else if (current === parent.left) {
              parent.left = current.left;
            } else {
              parent.right = current.left;
            }
            return;
          }

          let successorParent = current;
          let successor = current.right;

          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }

          // Copy the successor's value to the current node
          current.value = successor.value;

          // Delete the successor
          if (successor === successorParent.left) {
            successorParent.left = successor.right;
          } else {
            successorParent.right = successor.right;
          }

          return;
        }
      }
      if (!current) {
        console.log(`Node not Found`);
      }
    }
  }
}

const tree = new BST();

// console.log(`Tree is Empty? : ${tree.isEmpty()}`)

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

tree.delete(5);
// console.log(`Tree is Empty? : ${tree.isEmpty()}`)

// console.log(`Node found in the tree: ${tree.search(tree.root,5)}`)

// console.log(`Node found in the tree: ${tree.search(tree.root,20)}`)

// console.log(`Pre Order`)
// tree.preOrder(tree.root)

// console.log(`In Order`)
// tree.inOrder(tree.root)

// console.log(`Post Order`)
// tree.postOrder(tree.root)

// console.log(`Level Order`);
// tree.levelOrder();

// tree.min(tree.root)
// tree.max(tree.root)
