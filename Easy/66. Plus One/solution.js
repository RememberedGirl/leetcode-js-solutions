/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)

    let ret = "";
    let sum = 0;
    let i = a.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0 || sum) {
        if (i >= 0) sum += Number(a[i--]);
        if (j >= 0) sum += Number(b[j--]);

        ret = (sum % 2) + ret;
        sum = (sum / 2) >= 1;
    }

    return ret;
};


console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (a, b) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );


        const ret = addBinary(a, b)
        div.textContent = `a: ${a}, b: ${b} -> ${ret}`
        output.appendChild(div);
    };

    displayResult("11", "1");
    displayResult("11","0");
    displayResult("1010", "1011");
    displayResult("1111", "1111");
    displayResult("11110000000000000", "1111");

}
