const sumAll = function (number1, number2) {
    if ((number1 < 0) || (number2 < 0)) { // Filter out negative numbers.
        return "ERROR";
    } else if ((typeof number1 !== 'number')
        || (typeof number2 !== 'number')) { // Filter out non-numbers.
        return "ERROR";
    }

    // Ensure smallest/largest numbers are in correct position
    let min, max = 0;
    if (number1 > number2) {
        min = number2;
        max = number1;
    }
    else if (number1 < number2) {
        min = number1;
        max = number2;
    }

    // Loop through from min to max, adding together.
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
};

//console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
