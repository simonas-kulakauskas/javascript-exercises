const findTheOldest = function (people) {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const fillUndefinedDeath = (person) => {
        person.yearOfDeath = currentYear;
        return person;
    }

    const workOutAge = (person) => {
        return (person['yearOfDeath'] - person['yearOfBirth']);
    }
    const setFirstOldest = () => {
        if (typeof people[0]['yearOfDeath'] == 'undefined') {
            people[0] = fillUndefinedDeath(people[0]);
        }
        return people[0];
    }

    const workOutOldest = () => {

        let oldestPerson = setFirstOldest();
        let oldestAge = workOutAge(oldestPerson);

        for (i = 1; i < people.length; i++) {
            let newAge = workOutAge(people[i]);
            let newPerson = people[i];

            if (oldestAge < newAge) {
                oldestAge = newAge;
                oldestPerson = newPerson;
            }
        }
        return oldestPerson;
    }

    return workOutOldest();
};


// Do not edit below this line
module.exports = findTheOldest;


