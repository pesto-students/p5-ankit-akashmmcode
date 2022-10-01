let dutchNatFlag = (arr) =>{

    let zeros =  0;
    let ones  =  0;
    let twos  =  0;



    for(let val of arr){
        if(val === 0 ){
            zeros = zeros + 1;
        }
        else if(val === 1){
            ones = ones + 1;
        }
        else{
            twos = twos + 1;
        }
    }   


    for(let i = 0; i< zeros; i++){
        arr[i] = 0;
    }   

    for(let i = zeros; i< (zeros + ones) ; i++){
        arr[i] = 1;
    }

    for(let i = zeros+ones; i< (zeros + ones + twos) ; i++){
        arr[i] = 2;
    }

    return arr;
}

console.log(dutchNatFlag([2, 2, 2, 0, 0, 0, 1, 1]));