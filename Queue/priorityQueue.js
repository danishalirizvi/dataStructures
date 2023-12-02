class PriorityQueueArray {
  constructor() {
    this.items = []
  }

  enqueue(value, priority) {
    const item = { value, priority }
    let added = false

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority < item.priority) {
        this.items.splice(i, 0, item)
        added = true
        break
      }
    }

    if (!added) {
      this.items.push(item)
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return `Queue Empty.`
    }
    else {
      return this.items.shift()
    }
  }

  peek() {
    if (this.isEmpty()) {
      return `Queue is Empty.`
    }
    else {
      return this.items[0]
    }
  }

  isEmpty() {
    return this.items.length === 0
  }

  display() {
    for (let i of this.items) {
      console.log(`${i.value} with priority ${i.priority}`)
    }
  }
}

// const queue = new PriorityQueueArray()

// console.log(queue.peek())

// queue.enqueue(2, 5)
// queue.enqueue(3, 21)
// queue.enqueue(5, 29)
// queue.enqueue(5, 35)
// queue.enqueue(5, 20)
// queue.enqueue(5, 16)

// queue.display()

// console.log(queue.peek())

// queue.dequeue()

// queue.display()

class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
    this.next = null
  }
}
class PriorityQueueLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  peek() {
    return this.head
  }

  enqueue(value, priority) {
    const node = new Node(value, priority)

    if (!this.head) {
      this.head = node
    }
    else {
      let current = this.head
      let previous = null
      while (current && current.priority > priority) {
        previous = current
        current = current.next
      }
      if (previous === null) {
        node.next = this.head
        this.head = node
      }
      else {
        previous.next = node
        node.next = current
      }
    }
  }

  dequeue() {
    if (!this.head) {
      return `Queue is Empty.`
    }
    else {
      const removed = this.head
      this.head = this.head.next
      return removed
    }
  }

  display() {
    let current = this.head

    if (!current) {
      console.log(`Queue is Empty.`)
    }
    else {
      while (current) {
        console.log(`Value:${current.value}--->Next:${current.next ? current.next.value : null}--->Priority:${current.priority}`)
        current = current.next
      }
    }
  }
}


const queue = new PriorityQueueLinkedList()

// console.log(queue.dequeue())

queue.enqueue(11, 5)
queue.enqueue(34, 10)
queue.enqueue(21, 15)
queue.enqueue(30, 15)
queue.enqueue(5, 25)

// queue.display()

// console.log(queue.dequeue().value)
// console.log(queue.dequeue().value)
// console.log(queue.dequeue().value)
// console.log(queue.dequeue())

queue.display()