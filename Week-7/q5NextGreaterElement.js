function bigNum(arr) {
    let resultarr = [];
    let diff = 100;
    bolVal = false;
    for (let i = 0; i < arr.length; i++) {
      bolVal = false;
      diff = 100;
  
      for (j = i + 1; j < arr.length; j++) {
        
        let currDiff = arr[j] - arr[i];
  
        
        if (arr[j] > arr[i] && currDiff < diff) {
          resultarr[i] = arr[j];
         
          bolVal = true;
          diff = currDiff;
          break;
        }
      }
  
      if (bolVal == false) {
        resultarr[i] = -1;
      }
    }
    return resultarr;
  }
  
  let arr = [6, 8, 0, 1, 3];
  resultarr = bigNum(arr);
  console.log(resultarr);