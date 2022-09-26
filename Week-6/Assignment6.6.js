function solution(arr, x)
{
     
    // To store the closest sum
    let closestSum = Number.MAX_VALUE;
 
    // Run three nested loops each loop
    // for each element of triplet
    for(let i = 0; i < arr.length ; i++)
    {
        for(let j =i + 1; j < arr.length; j++)
        {
            for(let k =j + 1; k < arr.length; k++)
            {
                 
                // Update the closestSum
                if (Math.abs(x - closestSum) >
                    Math.abs(x - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
            }
        }
    }
     
    // Return the closest sum found
    return closestSum;
}
 
// Driver code
let arr = [ -1, 2, 1, -4 ];
let x = 1;
 
console.log(solution(arr, x));