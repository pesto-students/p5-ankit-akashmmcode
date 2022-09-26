function maxSubArraySum(a, size)
{
    
    var max_so_far = 0;
    var max_ending_here = 0
      
    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i]


        if (max_ending_here < 0)
            max_ending_here = 0;
  
        if (max_so_far < max_ending_here )
            max_so_far = max_ending_here;
    }
    return max_so_far
}
  
// Driver code
var a =  [-2, 1, -3, 4, -1, 2, 1, -5, 4];


const ff = maxSubArraySum(a, a.length);

console.log(ff);