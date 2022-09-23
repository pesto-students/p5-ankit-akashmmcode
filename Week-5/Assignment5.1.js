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
  console.log("Task3-step1");
  yield "Task3-yield1";
  console.log("Task3-step2");
  yield "Task3-yield2";
  console.log("Task3-step3");
  return "task3";

}



async function finalCall() {
  const res = await doTask1("Task1");
  console.log(res);

  const res2 = await doTask2(res);
  console.log(res2);


  const res3 = doTask3();
  res3.next();
  res3.next();
  res3.next();
  res3.next();
  
}

finalCall();