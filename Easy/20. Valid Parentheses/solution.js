/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    stack = []

    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i ++ ) {
        const e = s[i]

        if (e in bracketMap) {
            stack.push(bracketMap[e])

        } else if (e != stack.pop()){
            return false
        }
    }

    return stack.length == 0

};


console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (strs) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        div.textContent = `strs: ${strs} -> ${isValid(strs)}`
        output.appendChild(div);
    };

    displayResult('()[]{}');
    displayResult('()[]{}[');
    displayResult('');
}
