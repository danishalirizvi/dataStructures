class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  insertStart(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }

  insertEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++
  }

  insertAt(data, index) {
    const node = new Node(data)

    if (index < 0 || index > this.size) {
      console.log("Index not valid.")
    } else if (index === 0) {
      this.insertStart(data)
    } else {
      let current = this.head
      let previous;
      let count = 0;
      while (current && count < index) {
        previous = current
        current = current.next
        count++
      }
      node.next = current
      previous.next = node
      this.size++
    }
  }

  deleteStart() {
    if (!this.head) {
      console.log("List is Empty.")
    } else {
      this.head = this.head.next
      this.size--
    }
  }

  deleteEnd() {
    if (!this.head) {
      console.log("List is Empty.")
    } else {
      let current = this.head
      let previous
      while (current.next) {
        previous = current
        current = current.next
      }
      previous.next = null
      this.size--
    }
  }

  deleteAt(index) {
    if (index < 0 || index > this.size) {
      console.log("Index not valid.")
    } else if (index === 0) {
      this.deleteStart()
    } else {
      let current = this.head
      let previous;
      let count = 0;
      while (current && count < index) {
        previous = current
        current = current.next
        count++
      }
      previous.next = current.next
      this.size--
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

}

const linkedList = new LinkedList();
linkedList.insertStart("XYZ")
linkedList.insertEnd("A");
linkedList.insertEnd("B");
linkedList.insertEnd("C");
linkedList.insertAt("PRQ", 4)

linkedList.display()

linkedList.deleteStart()
linkedList.deleteEnd()
linkedList.deleteAt(1)


linkedList.display()