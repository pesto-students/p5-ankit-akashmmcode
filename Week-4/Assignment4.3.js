var fib = (n) => ({
    [Symbol.iterator](){
      let i = 1;
      let old = 0, new1 = 0;
      
      
      return {
        next(){
          if(i++ <= n){
            [old,new1] = [new1,(old+ new1) || 1];
            return {value:old,done:false}
          }
          else{
            return {done:true}
          }
        }
      }
    }
  });
  
  for(var i of fib(20)){
    console.log(i);
  }
  
  