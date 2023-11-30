class CircularQueueArray {
  constructor(capacity) {
    this.capacity = capacity
    this.items = new Array(capacity)
    this.front = this.rear = -1
  }

  enqueue(data) {
    if (this.isFull()) {
      console.log(`Queue is full.`)
    }
    else {
      if (this.isEmpty()) {
        this.front = this.rear = 0
      }
      else {
        this.rear = (this.rear + 1) % this.capacity
      }
      this.items[this.rear] = data
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty.`)
      return null
    }
    else {
      const removed = this.items[this.front]
      if (this.front === this.rear) {
        this.fornt = this.rear = -1
      }
      else {
        this.front = (this.rear + 1) % this.capacity
      }

      return removed
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty.`)
    }
    else {
      return this.items[this.front]
    }
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front
  }

  size() {
    if (this.isEmpty()) {
      return 0
    }
    if (this.front <= this.rear) {
      return this.rear - this.front
    }
    else {
      return this.capacity - this.front + this.rear + 1
    }
  }

  display() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty.`)
    }
    else {
      let current = this.front

      const data = []

      do {
        data.push(this.items[current])
        current = (current + 1) % this.capacity
      } while (current != (this.rear + 1) % this.capacity)

      console.log(data)
    }
  }
}

// const queue = new CircularQueueArray(3);

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log("Queue after enqueue operations:");
// queue.display(); // Output: 10 20 30

// console.log("Dequeue operation result:", queue.dequeue()); // Output: 10
// console.log("Queue after dequeue operation:");
// queue.print(); // Output: 20 30

// console.log("Front of the queue:", queue.peek()); // Output: 20
// console.log("Is the queue empty?", queue.isEmpty()); // Output: false
// console.log("Is the queue full?", queue.isFull()); // Output: false
// console.log("Queue size:", queue.size()); // Output: 2

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class CircularQueueLinkedList{
  constructor(){
    this.front = null
    this.rear = null
    this.size = 0
  }

  enqueue(data){
    const node = new Node(data)

    if(this.isEmpty()){
      this.front = node
      this.rear = node
    }
    else{
      this.rear.next = node
      this.rear = node
    }

    this.rear.next = this.front
    this.size++
  }

  dequeue(){
    if(this.isEmpty()){
      console.log(`Queue is Empty.`)
      return null
    }
    else{
      const removed = this.front.data
      
      this.front = this.front.next
      if(this.isEmpty()){
        this.rear = null
      }
      else{
        this.rear.next = this.front
      }

      this.size--

      return removed
    }
  }

  isEmpty(){
    return this.size === 0
  }

  peek(){
    return this.isEmpty() ? null : this.front.data
  }

  display() {
    let current = this.front

    console.log(`-----------------`)
    do{
      console.log(`${current.data}`)
      current = current.next
    } while(current != this.front)
    console.log(`-----------------`)
  }
}

let myCircularQueue = new CircularQueueLinkedList();
console.log(myCircularQueue.dequeue()); // Output: 1
myCircularQueue.enqueue(12);
myCircularQueue.enqueue(21);
myCircularQueue.enqueue(34);
console.log(myCircularQueue.dequeue()); // Output: 1
myCircularQueue.display();    // Output: 2
myCircularQueue.enqueue(43);
myCircularQueue.enqueue(63);
myCircularQueue.display();    // Output: 2

console.log(myCircularQueue.dequeue()); // Output: 1
console.log(myCircularQueue.peek());    // Output: 2
myCircularQueue.display();    // Output: 2
// console.log(myCircularQueue.getSize()); // Output: 2