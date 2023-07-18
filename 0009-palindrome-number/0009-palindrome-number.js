/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strNum = x + '';
    const revertStr = strNum.split("").reverse().join("");
    if(strNum === revertStr) return true;
    return false;
};