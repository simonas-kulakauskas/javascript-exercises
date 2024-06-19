const palindromes = function (sentence) {

    sentence = (sentence
        .replace(/[^\w\s\']|_/g, "") // Replacement magic, no idea how it works but it does :)
        .replaceAll(" ", "") // To compare string without spaces
        .toLowerCase() // To compare without capitalization
    );

    let reversedSentence = sentence.split("").reverse().join(""); // Reverse string to have something to compare, split it into array since reverse method needs it, reverse it then rejoin into string.

    if (sentence === reversedSentence) { return true; }
    else { return false };
};


// Do not edit below this line
module.exports = palindromes;

