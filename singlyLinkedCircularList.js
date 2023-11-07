class Node {
  constructor(data) {
    this.head = data
    this.next = null
  }
}

class SinglyLinkedCircularList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertStart(data) {
    const node = new Node(data)

    if (!this.head) {
      node.next = this.head
      this.head = node
    }
    else {
      node.next = this.head
      this.head = node
    }
  }

  display() {
    let current = this.head
    while (current != this.head) {

    }
  }
}