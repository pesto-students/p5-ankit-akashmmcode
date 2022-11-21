//function which takes in the string and checks for the vowels and return a MAP
function isVowel(char){

    let count = 0;
    let alpha = char.toLowerCase();
    const vowelMap = new Map();

    for(let i of alpha){
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            count = count + 1;
            vowelMap.set(alpha,count);

        }
    }

    return vowelMap;
}


const bb = isVowel("akash");

console.log(bb);

