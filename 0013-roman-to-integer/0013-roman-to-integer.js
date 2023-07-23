/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sym = {'I': 1, 'V': 5, 'X': 10, 'L':50, 'C':100, 'D':500, 'M':1000};
    var result = sym[s[s.length-1]];
    for(var i=s.length-2; i>=0; i--){
        if(sym[s[i]]>=sym[s[i+1]])
            result += sym[s[i]];
        else
            result -= sym[s[i]];
    }
    return result;
};