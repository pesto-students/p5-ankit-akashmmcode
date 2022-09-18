// function to create a Set and return the SET // 

function hasDuplicate(arr) {
    let newSetArr =  new Set(arr);
    return newSetArr;
  }


// the arry which is being passed to check if it has Duplicates or NOT // 
const arr = [1,2,3,4,5,5];

// the returned SET object

const newArr = hasDuplicate(arr);

// Condition to check if the ARRAY has duplicate or not.

arr.length == newArr.size ? console.log("No Duplicates") : console.log("Has Duplicates");