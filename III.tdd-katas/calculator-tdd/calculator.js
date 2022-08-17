const calculator = (input) => {
    if (input.length < 1) return 0;
    const isNumber = input.match(/-?\d+/g);
    return isNumber.reduce((a, b) => {
        if (b === 0) {
            return parseInt(a);
        }
        else if (b < 0 || b >= 1000) {
            throw new Error('Negatives not allowed: ' + isNumber.filter(numNegative => Math.sign(numNegative) === -1));
            /*      throw new Error(`¡el número ${b} no es válido!`); */
        } else {
            return parseInt(a) + parseInt(b);
        }
    }, 0);
};

module.exports = calculator;

