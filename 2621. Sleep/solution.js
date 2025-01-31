/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}


/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */



// Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (n) => {
        const div = document.createElement('div');

        let t = Date.now()
        sleep(n).then(() => {
            div.textContent = `n: ${n} -> ${Date.now() - t}`;
            output.appendChild(div);
        })

    };

    displayResult(100)
    displayResult(200)

}
