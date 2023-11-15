class QueueArray{
  constructor(){
    this.items = []
  }

  isEmpty(){
    return this.items.length === 0
  }
  
  enqueue(data){
    this.items.push(data)
  }

  dequeue(){
    if(this.isEmpty()){
      console.log(`Queue is Empty.`)
      return null
    }
    else{
      return this.items.shift()
    }
  }

  front(){
    return this.isEmpty()?null:this.items[0]
  }

  size(){
    return this.items.length
  }

  display(){
    if(this.isEmpty()){
      console.log(`Queue is Empty.`)
    }
    else{
      console.log(`-----------------------`)
      for(let i=0;i<this.items.length;i++){
        console.log(this.items[i])
      }
      console.log(`-----------------------`)
    }
  }
}

let queue = new QueueArray()

queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(21)

queue.display()

queue.dequeue()
queue.dequeue()
queue.dequeue()

queue.display()