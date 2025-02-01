/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {

    const romToInt = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let last = 0, ret = 0, curr
    for (let i = 0; i <s.length; i ++){
        curr = romToInt[s[i]]
        ret += curr
        if (curr > last)
            ret -= 2 * last
        last = curr
    }
    return ret

};




if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (x) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        div.textContent = `s: ${x} -> ${romanToInt(x)}`
        output.appendChild(div);
    };

    displayResult('MCMXCIV');
    displayResult("LVIII");
}
