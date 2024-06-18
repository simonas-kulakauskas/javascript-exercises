const removeFromArray = function () {

    // Setting up the variables and returning if none were given.
    let array = arguments[0];

    //let args;
    // const checkIfAnyArgs = () => { // Creates an array instance from arguments, cuts off first result (array to be deleted from)
    //     let args = Array.from(arguments).slice(1);
    //     if (args.length <= 0) {
    //         console.log("No arguments were sent!");
    //         return null;
    //     }
    //     else { console.log("Args were found!"); return args = args; }
    // }


    // if (checkIfAnyArgs() === null) { // Making sure that one or more arguments was sent, send it back if not, continue if they were.
    //     return (array);
    // } else if (checkIfAnyArgs().length > 0) {
    //     args = checkIfAnyArgs();
    // }
    let args = Array.from(arguments).slice(1);
    if (args.length <= 0) {
        console.log("No arguments sent!, Returning array!")
        return (array);
    }





    // Setting up Mechanism to actually do the main deleting part

    const removeElementFromArray = (array, elementIndex) => { // To remove element from array and send back updated array.
        array.splice(elementIndex, 1);
        return array;
    }

    const findIndexOfElementInArray = (array, element) => { // To find index of all element instances to be removed in array.
        let elementIndex = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                elementIndex.push(i);
            }
        }

        if (elementIndex.length <= 0) {
            console.log(`No elements of array '${array.toString()}' were found to match ${element}! Returning Null...`);
            return null;
        } else if (elementIndex.length >= 1) {
            return elementIndex;
        }
    }

    const findAllRelevantIndex = (array, args) => { // *** Should be able to find all relevant indexs (using findIndexOfElementInArray) and tabulate them all to pass later.
        // iterate through all 'args', push them to findIndex, make a new array with all values, return array
        let elementsToRemove = [];
        for (let i = 0; i < args.length; i++) {
            let foo = findIndexOfElementInArray(array, args[i]);
            if (foo.length > 0) {
                elementsToRemove = elementsToRemove.concat(foo)
            }
        }
        if (elementsToRemove.length > 0) {
            return (elementsToRemove);
        } else { return null; }
    }


    let elementIndex = findAllRelevantIndex(array, args);
    let currentArray = array;

    for (i = 0; i < elementIndex.length; i++) {
        removeElementFromArray(currentArray, elementIndex[i] - i)
    }
    return currentArray;







};

console.log(removeFromArray([1, 2, 3, 4, 1, 5, 1, 2, 3, 2, 2, "balls",], 1, 2, 3, "balls"))




// Do not edit below this line
module.exports = removeFromArray;
