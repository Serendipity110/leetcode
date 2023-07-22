/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    var number = 100, current;
    for(num1 of nums1)
    {
        current = num1;
        for(num2 of nums2)
        {
            if(num1 < num2)
                current = num1*10+num2;
            else if(num1 > num2)
                current = num2*10+num1;
            else
                current = num1;
            if(number>current)
                number = current;
        }
    }
    return number;
    
};