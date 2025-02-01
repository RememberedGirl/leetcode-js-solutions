/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let ret = strs[0]

    for (i = 1; i < strs.length; i++){
        for (j = 0; j < ret.length; j++){
            if (strs[i][j] != ret[j]) {
                ret = ret.slice(0,j)
            }

        }
    }
    return ret
};



if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (strs) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        div.textContent = `strs: ${JSON.stringify(strs)} -> ${longestCommonPrefix(strs)}`
        output.appendChild(div);
    };

    displayResult(["flower","flow","flight"]);
    displayResult(["dog","racecar","car"]);
    displayResult(["racecardog","racecar","raceccar"]);
}
