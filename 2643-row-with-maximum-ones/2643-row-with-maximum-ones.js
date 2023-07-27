/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    var m = mat.length;
    var index=0, maxCnt=0;
    for(var i=0;i<m;i++)
    {
        let cnt = 0;
        for(var j=0;j<mat[i].length;j++)
            if(mat[i][j] === 1)
                cnt++;
        if(cnt > maxCnt)
        {
            maxCnt = cnt;
            index = i;
        }
    }
    return [index, maxCnt];
};