/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result=[];
    var fir, sec;
    for(var num of nums)
    {
        fir = nums.indexOf(num);
        sec = nums.indexOf(target-num, fir+1)
        if(sec !== -1)
        {
            result.push(fir);
            result.push(sec);
            return result;
        }
    }
    return -1;    
};