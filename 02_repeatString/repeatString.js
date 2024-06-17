const repeatString = function (chosenWord, repeatQuantity) {
    let joinedString = "";
    if (repeatQuantity < 0) {
        return "ERROR";
    }
    else {
        for (i = 0; i < repeatQuantity; i++) {
            joinedString += chosenWord;
        }
        return joinedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
