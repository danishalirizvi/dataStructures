class Stack{
  constructor(){
    this.data = []
  }

  push(value){
    this.data.push(value)
  }
  
  pop(){
    return this.data.pop()
  }

  peek(){
    return this.data(this.data.length - 1)
  }

  isEmpty(){
    return this.data.length === 0
  }

  display(){
    if(this.isEmpty()){
      console.log(`The stack is Empty.`)
    }
    else{
      console.log(`The top of stack is at Index => ${this.data.length-1}`)
      console.log(`The top of stack is ${this.data[this.data.length-1]}`)
      for(let i=this.data.length-1;i>=0;i--){
        console.log(this.data[i])
      }
    }
  }
}

const stack = new Stack()

stack.push(12)
stack.pop()
stack.push(312)
stack.push(43)
stack.push(21)
stack.push(32)
stack.push(24)
stack.pop()
console.log(`The poped element is ${stack.pop()}`)

stack.display()

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class ListStack{
  constructor(){
    this.top = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  push(data){
    const node = new Node(data)

    node.next = this.top
    this.top = node
    this.size++
  }

  pop(){
    if(this.isEmpty()){
      console.log(`The stack is Empty.`)
      return null
    }
    else{
      const popedNode = this.top

      this.top = popedNode.next

      this.size--

      return popedNode.data
    }
  }

}