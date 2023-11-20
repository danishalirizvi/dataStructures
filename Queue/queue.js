class QueueArray {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  enqueue(data) {
    this.items.push(data)
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty.`)
      return null
    }
    else {
      return this.items.shift()
    }
  }

  front() {
    return this.isEmpty() ? null : this.items[0]
  }

  size() {
    return this.items.length
  }

  display() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty.`)
    }
    else {
      console.log(`-----------------------`)
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.items[i])
      }
      console.log(`-----------------------`)
    }
  }
}

// let queue = new QueueArray()

// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(21)

// queue.display()

// queue.dequeue()
// queue.dequeue()
// queue.dequeue()

// queue.display()

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null
    this.rear = null
    this.size = 0
  }

  enqueue(data) {
    const node = new Node(data)

    if (this.rear === null) {
      this.front = this.rear = node
    }
    else {
      this.rear.next = node
      this.rear = node
    }
    this.size++
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty.`)
    }
    else {
      let temp = this.front
      this.front = this.front.next
      this.size--
      if (this.isEmpty() === null) {
        this.rear = null
      }
      return temp.data
    }
  }

  isEmpty() {
    return this.size === 0
  }

  display() {
    let current = this.front

    console.log(`-----------------`)
    while (current != null) {
      console.log(`${current.data}`)
      current = current.next
    }
    console.log(`-----------------`)
  }

}

let queue = new QueueLinkedList()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()
console.log(`Dequeued element is => ${queue.dequeue()}`)
console.log(`Dequeued element is => ${queue.dequeue()}`)
queue.display()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()

console.log(queue.isEmpty())