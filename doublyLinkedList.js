class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertStart(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node
    } else {
      node.next = this.head;
      this.head.prev = node
      this.head = node;
    }
    this.size++
  }

  insertEnd(data) {
    let node = new Node(data)

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      node.prev = current
      this.size++
    }
  }

  insertAt(data, index) {
    const node = new Node(data)

    if (index < 0 || index > this.size) {
      console.log("Index not valid.")
    } else if (index === 0) {
      this.insertStart(data)
    } else {
      let current = this.head
      // let previous;
      let count = 0;
      while (current && count < index) {
        // previous = current
        current = current.next
        count++
      }
      // console.log("=====>" + current.prev.data)
      // console.log(current.data)
      node.next = current
      node.prev = current.prev
      current.prev.next = node
      this.size++
    }
  }

  deleteStart() {
    if (!this.head) {
      console.log("List is Empty.");
    } else {
      this.head = this.head.next
      this.head.prev = null
      this.size--
    }
  }

  deleteEnd() {
    if (!this.head) {
      console.log("List is Empty.");
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.prev.next = null
      current.prev
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  displayTest() {
    let current = this.head;
    while (current) {
      console.log(`----------`)
      console.log(current.prev ? current.prev.data : "null")
      console.log(current.data ? current.data : "null")
      console.log(current.next ? current.next.data : "null")
      current = current.next
    }
  }
}

const linkedList = new DoublyLinkedList();
linkedList.deleteStart()
linkedList.insertEnd("A");
linkedList.insertEnd("B");
linkedList.insertStart("XYZ")
linkedList.deleteStart()
linkedList.insertEnd("C");
linkedList.insertAt("PRQ", 0)
linkedList.deleteStart()
// linkedList.display()

// linkedList.deleteStart()
// linkedList.deleteEnd()
// linkedList.deleteAt(1)


linkedList.display()
// linkedList.displayTest()