
const convertToOldRoman = (arabicOld) => {
    validation(arabicOld);
    const units = ["", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "VIIII"];
    const tens = ["", "X", "XX", "XXX", "XXXX", "L", "LX", "LXX", "LXXX", "LXXXX"];
    const hundreds = ["", "C", "CC", "CCC", "CCCC", "D", "DC", "DCC", "DCCC", "DCCCC"];
    const thousands = ["", "M", "MM", "MMM"];

    const m = Math.floor(arabicOld / 1000);
    const cm = arabicOld % 1000;
    const c = Math.floor(cm / 100);
    const xc = cm % 100;
    const x = Math.floor(xc / 10);
    const i = xc % 10;

    const roman = thousands[m] + hundreds[c] + tens[x] + units[i];
    return roman;
}



const convertToNewRoman = (arabicNew) => {
    validation(arabicNew);
    const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM"];

    const m = Math.floor(arabicNew / 1000);
    const cm = arabicNew % 1000;
    const c = Math.floor(cm / 100);
    const xc = cm % 100;
    const x = Math.floor(xc / 10);
    const i = xc % 10;

    const roman = thousands[m] + hundreds[c] + tens[x] + units[i];
    return roman;
};

const validation = (num) => {
    if (typeof num !== "number") throw new Error("¡debe ser un número!");
    if (num > 3000) throw new Error("¡solo acepta hasta el número 3000!");
}

module.exports = { convertToOldRoman, convertToNewRoman };