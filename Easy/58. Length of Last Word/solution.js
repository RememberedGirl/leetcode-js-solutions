
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    const words = s.trim().split(' ');
    return words[words.length - 1].length;

};


console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (s) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const ret = lengthOfLastWord(s)
        div.textContent = `s: ${s}  ->  ${ret}`
        output.appendChild(div);
    };

    displayResult( "luffy is still joyboy");
    displayResult( "   fly me   to   the moon  ");
    displayResult( "luffy is still joyboy");

}
