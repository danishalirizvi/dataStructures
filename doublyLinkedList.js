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
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.size++
    }
  }

  insertAt(data, index) {
    const node = new Node(data)

    if (index < 0 || index >= this.size) {
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
      this.size--
    }
  }

  deleteAt(index) {
    if (index = 0 || index > this.size) {
      console.log(`Index not Valid.`);
    } else {
      let current = this.head
      let count = 0
      while (current && count < index) {
        current = current.next
        count++
      }
      current.prev.next = current.next

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
    let strRep = ""
    while (current) {
      strRep += current.data ? "  " + current.data : "  null";
      console.log(`----------`)
      console.log(current.prev ? current.prev.data : "null")
      console.log(current.data ? current.data : "null")
      console.log(current.next ? current.next.data : "null")
      current = current.next
    }
    console.log(`----------`)
    console.log(strRep)
  }
}

const linkedList = new DoublyLinkedList();
// linkedList.deleteStart()
// linkedList.insertStart("AA")
// linkedList.insertStart("BB")
// linkedList.insertEnd("A");
// linkedList.insertEnd("B");
// linkedList.insertStart("XYZ")
// linkedList.deleteStart()
// linkedList.insertEnd("C");
linkedList.insertAt("PP", 3)
// linkedList.deleteStart()
// linkedList.deleteEnd()
// linkedList.display()

// linkedList.deleteStart()
// linkedList.deleteEnd()
// linkedList.deleteAt(1)


linkedList.display()
// linkedList.displayTest()