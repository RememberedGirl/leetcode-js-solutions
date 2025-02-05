
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {


    for (let i = 0; i < haystack.length; i ++ ){
        let i_ = i, j = 0
        while (i_ < haystack.length && haystack[i_] == needle[j]){
            j++
            if (j == needle.length) return i
            i_++
        }
    }

    return -1
};


console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (haystack, needle) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const ret = strStr(haystack, needle)
        div.textContent = `haystack: ${haystack}, needle: ${needle} -> ${ret}`
        output.appendChild(div);
    };

    displayResult("sadbutsad","sad");
    displayResult("mississippi","issip");
    displayResult("leetcode", "leeto");

}
