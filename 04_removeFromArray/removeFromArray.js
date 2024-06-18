const removeFromArray = function () {

    // Setting up the variables and returning if none were given.
    let array = arguments[0];
    let args;

    const checkIfAnyArgs = () => { // Creates an array instance from arguments, cuts off first result (array to be deleted from)
        let args = Array.from(arguments).slice(1);
        if (args.length <= 0) {
            console.log("No arguments were sent!");
            return null;
        }
        else { return args; }
    }


    if (checkIfAnyArgs() === null) { // Making sure that one or more arguments was sent, send it back if not, continue if they were.
        return (array);
    } else if (checkIfAnyArgs().length > 0) {
        args = checkIfAnyArgs();
    }

    // Setting up Mechanism to actually do the main deleting part

    const removeElementFromArray = (array, elementIndex) => { // To remove element from array and send back updated array.
        array.splice(elementIndex, 1);
        return array;
    }

    const findIndexOfElementInArray = (array, element) => { // To find index of all element instances to be removed in array.

    }




};

console.log(removeFromArray([1, 2, 3, 4], 1))




// Do not edit below this line
module.exports = removeFromArray;
