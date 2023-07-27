/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var result=[], len, maxlen;
    for(var i=0;i<n;i++)
    {
        maxlen = 0;
        for(var j=0;j<m;j++)
        {
            len = grid[j][i].toString().length;
            if(len > maxlen)
                maxlen = len;
        }
        result.push(maxlen);
    }      
    return result;
};