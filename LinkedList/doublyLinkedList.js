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
    this.tail = null
    this.size = 0
  }

  insertStart(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node
      this.tail = node
    }
    else {
      node.next = this.head;
      this.head.prev = node
      this.head = node;
    }
    this.size++
  }

  insertEnd(data) {
    if (!this.head) {
      this.insertStart(data)
    }
    else {
      let node = new Node(data)
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.size++
    }
  }

  insertAt(data, index) {
    if (index < 0 || index >= this.size) {
      console.log("Index not valid.")
    }
    else if (index === 0) {
      this.insertStart(data)
    }
    else {
      const node = new Node(data)
      let current = this.head
      let count = 0;
      while (current && count < index) {
        current = current.next
        count++
      }
      node.next = current
      node.prev = current.prev
      current.prev.next = node
      current.prev = node;
      this.size++
    }
  }

  deleteStart() {
    if (!this.head) {
      console.log("List is Empty.");
    }
    else {
      if (this.size === 1) {
        this.head = null
        this.tail = null
      }
      else {
        this.head = this.head.next
        this.head.prev = null
      }
      this.size--
    }
  }

  deleteEnd() {
    if (!this.head) {
      console.log("List is Empty.");
    }
    else {
      if (this.size === 1) {
        this.deleteStart()
      }
      else {
        let current = this.head
        while (current.next) {
          current = current.next
        }
        this.tail = current.prev
        this.tail.next = null
        this.size--
      }
    }
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      console.log(`Index not Valid.`);
    }
    else if (index === 0) {
      this.deleteStart()
    }
    else if (index === this.size - 1) {
      this.deleteEnd()
    }
    else {
      let current = this.head
      let count = 0
      while (current && count < index) {
        current = current.next
        count++
      }
      current.prev.next = current.next
      this.size--
    }
  }

  display() {
    let current = this.head;
    let index = 0
    while (current) {
      console.log(`Index ${index} => ${current.data}`)
      current = current.next
      index++
    }
    console.log(`List Size = ${this.size}`)
    console.log(this.head ? this.head.data : null)
    console.log(this.tail ? this.tail.data : null)
  }

  reset() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
module.exports = DoublyLinkedList;

const list = new DoublyLinkedList()

list.insertEnd(1)
list.insertEnd(2)
list.insertEnd(3)
list.insertEnd(4)

list.deleteAt(2)

list.display()