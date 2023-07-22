/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    var len = 0, comlen = 0, flag = 0, number = 0;
    for(num of s){
        if(num == "0" && flag == 0)
        {
            comlen++;
        }
        else if(num == "0" && flag == 1)
        {
            comlen = 1;
            flag = 0;
            len = 0;
        }
        else if(num == "1")
        {
            flag = 1;
            comlen--;
            if(comlen >= 0)
                len++;
        }
        if(number < len*2)
        {
            number = len*2;
        }
    }
    return number;
};