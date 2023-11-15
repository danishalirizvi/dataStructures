class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedCircularList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insertStart(data) {
    const node = new Node(data)

    if (!this.head) {
      node.next = node
      node.prev = node
      
      this.head = node
      this.tail = node
    }
    else {
      node.next = this.head
      this.head.prev = node
      node.prev = this.tail
      this.tail.next = node

      this.head = node
    }
    this.size++
  }

  insertEnd(data){

    if(!this.head){
      this.insertStart(data)
    }
    else{
      const node = new Node(data)
      
      node.prev = this.tail
      node.next = this.head
      
      this.tail.next = node
      this.head.prev = node

      this.tail = node

      this.size++
    }
  }

  insertAt(index,data){
    if(index < 0 || index >= this.size){
      console.log(`Index not valid.`)
    }
    else{
      if(index === 0){
        this.insertStart(data)
      }
      else{
        const node = new Node(data)
        
        let current = this.head
        let count = 0

        while(index !== count){
          current = current.next
          count++
        }

        node.next = current
        node.prev = current.prev

        current.prev.next = node

        current.prev = node

        this.size++
      }
    }
  }

  deleteStart(){
    if(!this.head){
      console.log(`List is Empty.`)
    }
    else{
      if(this.size === 1){
        this.head = null
        this.tail = null
      }
      else{
        this.head = this.head.next
        this.head.prev = this.tail
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
        this.deleteStart()
      }
      else{
        this.tail = this.tail.prev
        this.tail.next = this.head

        this.head.prev = this.tail
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

        while(index != count){
          current = current.next
          count++
        }
        current.prev.next = current.next
        current.next.prev = current.prev
        this.size--
      }
    }
  }
  
  display() {
    if (this.head) {
      let current = this.head
      let index = 0
      let strRep = ``
      do {
        strRep = `${strRep}  ${current.data}`
        console.log(`Node at index ${index}`)
        console.log(`Prev   Node   Next`)
        console.log(`${current.prev.data}       ${current.data}        ${current.next.data}`)
        current = current.next
      } while (current !== this.head)
      console.log(`List=>  ${strRep}`)
    }
    else {
      console.log(`List is Empty`)
    }
  }
}


const ll = new DoublyLinkedCircularList()

ll.insertEnd(1)
ll.insertEnd(2)
ll.insertEnd(3)
ll.insertEnd(4)
ll.deleteAt(2)
// ll.insertStart(3)
// ll.insertStart(4)
// ll.insertAt(2,5)
// ll.insertAt(0,2)
// ll.insertAt(3,9)
// ll.deleteStart()
// ll.deleteStart()
// ll.deleteStart()
// ll.insertStart(2)
// ll.insertStart(1)
// ll.deleteEnd()
// ll.deleteEnd()
// ll.deleteEnd()
// ll.deleteEnd()



ll.display()