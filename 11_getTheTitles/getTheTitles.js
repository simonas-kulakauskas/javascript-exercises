const getTheTitles = function (books) {
    let bookTitles = [];

    for (let i = 0; i < books.length; i++) {
        bookTitles.push(books[i]['title']);
    }

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
