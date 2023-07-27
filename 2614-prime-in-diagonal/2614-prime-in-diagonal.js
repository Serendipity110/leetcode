/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    var len = nums.length;
    var result = 0;
    for(var i=0;i<len;i++)
    {
        if(isPrime(nums[i][i]))
            result = result>nums[i][i]?result:nums[i][i];
        if(isPrime(nums[i][len-i-1]))
            result = result>nums[i][len-i-1]?result:nums[i][len-i-1];
    }
    return result;
};
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}