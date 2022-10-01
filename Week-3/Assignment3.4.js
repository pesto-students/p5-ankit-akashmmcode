function createStack(){
    const items = [];
    return{
      push(item){
        items.push(item);   
      },
      
  
      pop(){
        return items.pop();
      }
  
    };
  }
  
  
  const stack = createStack();
  stack.push(10);   //here it will push to the arra                  
  stack.push(20);   //here it will push to the array
  stack.push(30);   //here it will push to the array
  stack.pop();      //here will pop the last element in the array
  
  console.log(stack.items);  //this is our objective not to access elemets inside array