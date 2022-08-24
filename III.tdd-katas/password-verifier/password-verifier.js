const passwordVerifier = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("¡Ocurrió un error!");
    }
    if (numbers.length < 8) {
        return "la contraseña debe tener más de 8 caracteres";
        /*     throw new Error("¡Ocurrió un error!"); */
    }
    const isString = numbers.toString();
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const isNumber = /[0-9]/g;
    /*  const alls =  /[0-9][a-z][A-Z]/g; */

    if (isString.match(lowerCaseLetters) && isString.match(upperCaseLetters) && isString.match(isNumber)) {
        return numbers;
    }
    else if (isString.match(upperCaseLetters) && isString.match(isNumber) || isString.match(isNumber) && isString.match(upperCaseLetters)) {
        return "la contraseña debe tener al menos una letra minúscula";
    }
    else if (isString.match(lowerCaseLetters) && isString.match(isNumber) || isString.match(isNumber) && isString.match(lowerCaseLetters)) {
        return "la contraseña debe tener al menos una letra mayúscula";
    }
    else if (isString.match(lowerCaseLetters) && isString.match(upperCaseLetters)) {
        return "la contraseña debe tener al menos un número.";
    } else {
        return `
        1.- la contraseña debe tener más de 8 caracteres; 
        2.- la contraseña debe tener al menos una letra mayúscula;
        3.- la contraseña debe tener al menos una letra minúscula;
        4.- la contraseña debe tener al menos un número.
        `
    }
}

module.exports = { passwordVerifier };
