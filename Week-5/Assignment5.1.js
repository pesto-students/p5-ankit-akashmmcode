//async and await function
function doTask1(value) {
    return new Promise((resolve, reject) => {
      if (value === "Task1") {
        resolve(value);
      } else {
        reject(value);
      }
    });
  }
  
  function doTask2(response) {
    return new Promise((resolve, reject) => {
      if (response === "Task1") {
        resolve("Task2");
      } else {
        reject("Task2");
      }
    });
  }
  
//generator function
  function* doTask3() {
    yield "Task3";
  }
  


  async function finalCall() {
    const res = await doTask1("Task1");
    console.log(res);
  
    const res2 = await doTask2(res);
    console.log(res2);


    const res3 = doTask3();
    
    for( let val of res3){
        console.log(val);
    }
  }
  
  finalCall();