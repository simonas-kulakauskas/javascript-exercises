const fibonacci = function (inputNumber) {
    let fib1 = 0;
    let fib2 = 1;
    let fibonacciNumber = 1;

    inputNumber = Math.round(inputNumber);


    if (inputNumber == 0) { return 0; } // For loop won't function with 0, so return 0 if it was inputted.
    else if (inputNumber < 0) { return "OOPS"; } // Don't allow negative numbers because they don't work.

    for (i = 1; i < inputNumber; i++) {
        fibonacciNumber = fib1 + fib2
        fib1 = fib2
        fib2 = fibonacciNumber
    }
    return fibonacciNumber;
};



// Do not edit below this line
module.exports = fibonacci;
