const removeFromArray = function (array) {

    const seperateArguments = () => { // Get all arguments given (apart from 'array') and make an array of them.
        let itemsToRemove = [];
        for (i = 1; i < arguments.length; i++) {
            itemsToRemove.push(arguments[i]);
        }
        return (itemsToRemove);
    }

    // seperateArguments fetches all the arguments supplied apart from first one (array).


    for (i = 0; i < array.length; i++) {
        console.log(array[i])
        for (j = 0; j < seperateArguments().length; j++) {
            if (array[i] === seperateArguments()[j]) {
                console.log(`Array's ${array[i]} and Argument's ${seperateArguments()[j]} match!`)
            } else {
                console.log("no match")
            }
        }
    }



};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4, 5, "balls")




// Do not edit below this line
module.exports = removeFromArray;
