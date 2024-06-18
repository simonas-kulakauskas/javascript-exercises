const leapYears = function (userYear) {
    if (userYear % 4 === 0 && ((userYear % 100 !== 0) || (userYear % 400 === 0))) {
        return true;
    } else { return false; }
};
console.log(`Is 2000 a leap year? : ${leapYears(2000)}`);
console.log(`Is 1985 a leap year? : ${leapYears(1985)}`)
// Do not edit below this line
module.exports = leapYears;

/*
Logic Flowchart:
    Year divisible 4?
    True:
        Year divisible by 100?
        True: 
            Year divisible by 400?
            True:
                LEAP YEAR!
            False:
                NOT LEAP YEAR!
        False:
        NOT LEAP YEAR!
    False:
    NOT LEAP YEAR!
*/