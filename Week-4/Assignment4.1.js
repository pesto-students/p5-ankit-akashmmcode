function getNumber(pro,ms){
  
  let random = Math.floor(Math.random() * 100);

  setTimeout(() => {
    pro(random);
  }, ms);

  pro("Pending")
}

function promise(num){

  if(typeof num  == 'string'){
    console.log(`<state> : ${num}`)
  }else{
    
    try{
      if(num%5===0){
        console.log(`<state> : Rejected, <value> : ${num}`);
      }
      else{
        console.log(`<state> : Resolved, <value> : ${num}`);
      }
    }
    catch (e) {
      console.log("Error");
    }
    finally{
      console.log(`<state> : Fullfilled, <value> : ${num}`);
    }
  }

}

const res_rej_time = 3000;


getNumber(promise,res_rej_time);