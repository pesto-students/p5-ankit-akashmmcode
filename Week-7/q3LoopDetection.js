class LinkedList {
    constructor() {
      this.head = null; // we don't have any head yet
      this.length = 0;
    }
  
    //current head of array we need to replace it
    insertAtHead(data) {
      const newNode = new LinkedListNode(data, this.head); //next element is going to be our current head
      this.head = newNode; // set curren head and set to new node we just created
      this.length++;
    }
  
    getByIndex(index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        
        //index-->value we want to get to .
        current = current.next;
      }
      return current;
    }
  
    print() {
      let output = "";
      let current = this.head;
      while (current) {
        output = `${output}${current.value} -> `;
        current = current.next;
      }
  
      console.log(`${output}null`); //last element points to null
    }
  
    loopCreate(ind1) {
      let siLi = this.length;
      let ind2 = siLi - 1;
   
      let current = this.head;
      let letInd1 = null;
      let letInd2 = null;
      for (let i = 0; i <= ind2; i++) {
        if (i === ind1) {
          letInd1 = current;
     
        }
        if (i === ind2) {
          letInd2 = current;
         
        }
        current = current.next;
      }
  
      letInd2.next = letInd1.next;
    }
  
    insertAtIndex(index, value) {
      if (index === 0) return this.insertAtHead(value);
  
      const prev = this.getByIndex(index - 1);
      if (prev == null) return null;
  
      prev.next = new LinkedListNode(value, prev.next);
      this.length++;
    }
  
    removeHead() {
      this.head = this.head.next;
      this.length--;
    }
  
    removeAtIndex(index) {
      if (index === 0) return this.removeHead();
  
      const prev = this.getByIndex(index - 1);
      if (prev == null) return null;
  
      prev.next = prev.next.next;
      this.length--;
    }
  
    loopDetect() {
      let first = this.head;
      let second = this.head;
      let bolVal = false;
      while (first !== null && second !== null && second.next !== null) {
      
        first = first.next;
   
        second = second.next.next;
        if (first === second) {
          
          bolVal = true;
          break;
        }
      }
  
      return bolVal;
    }
  }
  
  class LinkedListNode {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  const l1 = new LinkedList();
  l1.insertAtHead(10);
  l1.insertAtHead(20);
  l1.insertAtHead(30);
  
  l1.insertAtIndex(2, 40);
  l1.insertAtIndex(3, 60);
  l1.print();
  //x->xth element in linked list .
  let x=5;
  let finalx=x-1;
  if(x !==0){
    l1.loopCreate(finalx);
  }
  
  bolVal = l1.loopDetect();
  console.log("bolVAL", bolVal);
  if (bolVal == false) {
    console.log("No loop");
  } else {
    console.log("loop there");
  }