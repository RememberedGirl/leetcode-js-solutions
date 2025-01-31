/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0
    let b = 1

    while (true) {
        // yield (b =  a + b) - (a  = b - a);
        yield a;
        [a, b] = [b, a + b ]
    }
};

// // Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (n) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const gen = fibGenerator();
        div.textContent = `n: ${n} -> ${JSON.stringify(Array.from(
            { length: n },
            () => gen.next().value
        ))}`
        output.appendChild(div);
    };

    displayResult(5);
    displayResult(15);
    displayResult(50);
}
