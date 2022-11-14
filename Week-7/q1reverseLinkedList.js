class LinkedList {
    constructor() {
      this.head = null; // we don't have any head yet
      this.length = 0;
    }
  
    //current head of rray we need to replace it
    insertAtHead(data) {
      const newNode = new LinkedListNode(data, this.head); //next element is going to be our current head
      this.head = newNode; // set curren head and set to new node we just created
      this.length++;
    }
  
    getByIndex(index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        console.log("indexxxx 000 --------------------------- ");
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
  
    reverse(head = this.head) {
      let first = this.head;
      let second = first.next;
  
      while (second) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      this.head.next = null;
      this.head = first;
      //return this.print();
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
  l1.print();
  
  console.log(l1.reverse());
  l1.print();
  
  