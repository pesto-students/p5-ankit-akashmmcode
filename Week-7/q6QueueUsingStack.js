class QueueUsingStack {
    constructor() {
      this.st1 = [];
      this.st2 = [];
    }
  
    //eneque
    push(element) {
      this.st1.push(element);
    }
  
    //dequeue remove element
    pop() {
      if (this.st2.length === 0) {
        // y this condition ,
        // move everything from st1 to st2
        while (this.st1.length > 0) {
          const item = this.st1.pop();
          this.st2.push(item);
        }
      }
      let itemPopped=this.st2.pop();
  
      while (this.st2.length > 0) {
        const item = this.st2.pop();
        this.st1.push(item);
      }
  
      // dequeue from st2
      //return this.st2.pop();
  
      return itemPopped;
    }
  
    peek() {
      return this.st1[this.st1.length - 1];
    }
  
    
  
    printQueue(){
      return this.st1;
    } 
  
    searchElement(element) {
      for (let i = 0; this.st1.length; i++) {
        if (element == this.st1[i]) {
          return i;
        }
      }
      return -1;
    }
  }
  
  
  const queue = new QueueUsingStack();
  
  
  let arr = [1, 2, 1, 3, 2, 1, 4, 2];
  
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] == 1 && arr[i + 1] != undefined) {
      queue.push(arr[i + 1]);
      
      console.log("queue-->"+queue.printQueue());
      i++;
    } else if (arr[i] == 2) {
      console.log("poppeed element" + queue.pop());
  
      console.log("queue---->"+queue.printQueue());
    }
  }