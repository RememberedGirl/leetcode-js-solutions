/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {

}


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))

// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (functions, x) => {
        const fn = compose(functions)
        const div = document.createElement('div');
        div.textContent = `functions: [${functions.map(fn => fn.toString())}], x: ${x} -> ${fn(x)} `;
        output.appendChild(div);
    };

    displayResult([x => 10 * x, x => 10 * x, x => 10 * x], 1);
    displayResult([x => x + 1, x => x * x, x => 2 * x], 4);
    displayResult([], 42);
}
