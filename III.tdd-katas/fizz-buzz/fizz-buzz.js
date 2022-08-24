const fizzBuzz = (number) => {
    const result = [];
    if (typeof number !== "number") {
        throw new Error("¡Debe ingresar un número!")
    }
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    return result.toString();
}

module.exports = fizzBuzz;
