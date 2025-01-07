/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    return function() {
        return n++;
    };
}

/**
 * Пример использования:
 */
const counter = createCounter(10);
const result = [counter(), counter(), counter()]
console.log(result); // [10, 11, 12]

// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (n, len) => {
        const counter = createCounter(n);
        const result = Array.from({length: len}, () => counter());
        const div = document.createElement('div');
        div.textContent = `n: ${n}, len: ${len} -> ${JSON.stringify(result)}`;
        output.appendChild(div);
    };

    displayResult(10, 3);
    displayResult(-5, 15);
}
