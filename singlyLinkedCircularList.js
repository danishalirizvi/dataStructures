class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedCircularList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insertStart(data) {
    const node = new Node(data)
    if (this.head === null) {
      this.head = node
      this.tail = node
      this.tail.next = this.head
    } else {
      node.next = this.head
      this.head = node
      this.tail.next = this.head
    }
    this.size++
  }

  insertEnd(data) {
    if (!this.head) {
      this.insertStart(data)
    }
    else {
      const node = new Node(data)
      this.tail.next = node
      this.tail = node
      this.tail.next = this.head
      this.size++
    }
  }

  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      console.log(`Index ${index} not valid.`)
    }
    else if (index === 0) {
      this.insertStart(data)
    }
    else if (index === this.size) {
      this.insertEnd(data)
    }
    else {
      const node = new Node(data)
      let count = 0
      let current = this.head
      while (count < index - 1) {
        current = current.next
        count++
      }
      node.next = current.next
      current.next = node
      this.size++
    }
  }

  deleteStart(){
    if(!this.head){
      console.log(`List is Empty.`)
    }
    else {
      if(this.size === 1){
        this.head = null
        this.tail = null
      }
      else{
        this.head = this.head.next
        this.tail.next = this.head
      }
      this.size--
    }
  }

  deleteEnd(){
    if(!this.head){
      console.log(`List is Empty.`)
    }
    else{
      if(this.size === 1){
        this.head = null
        this.tail = null
      }
      else{
        let current = this.head
        while(current.next !== this.tail){
          current = current.next
        }
        this.tail = current
        this.tail.next = this.head
      }
      this.size--
    }
  }

  deleteAt(index){
    if(index < 0 || index >= this.size){
      console.log(`Index not valid.`)
    }
    else{
      if(index === 0){
        this.deleteStart()
      }
      else if(index === this.size-1){
        this.deleteEnd()
      }
      else{
        let current = this.head
        let count = 0
        while(count < index){
          current = current.next
          count++
        }
        current = current.next.next
        this.size--
      }
    }
  }
  
  reset() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  display() {
    console.log(`----------------`)
    console.log(`Size = ${this.size}`)
    console.log(`Head = ${this.head ? this.head.data : null}`)
    console.log(`Tail = ${this.tail ? this.tail.data : null}`)
    console.log(`----------------`)
    let current = this.head
    let index = 0
    if (this.head) {
      do {
        console.log(`Index ${index} => ${current.data}`)
        current = current.next
        index++
      } while (current !== this.head)
    }
    else {
      console.log(`The list is empty.`)
    }
  }
}

// const list = new SinglyLinkedCircularList()

// list.insertEnd(1)
// list.insertEnd(2)
// list.insertEnd(3)

// list.deleteStart()
// list.deleteEnd()
// list.deleteAt(0)

// list.display()
