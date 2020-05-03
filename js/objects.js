(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Laura",
        lastName: "Davis"
    };


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // output: the name of the person, the amount before the discount, the discount, if any, and the amount after the discount.

    function discountOffer (arr, eligibleAmount, discountPercent) {
        var discountDecimal = discountPercent / 100;
        var output = "";
        arr.forEach(function (element) {
            var discount = (discountDecimal * element.amount).toFixed(2);
            var initialAmount = element.amount.toFixed(2).toString();
            var gapToDiscountAmount = (eligibleAmount - element.amount).toFixed(2).toString();
            var finalAmount = (element.amount - discount).toFixed(2).toString();
            if (element.amount > eligibleAmount) {
                output += element.name + ", because you spent $" + initialAmount
                    + ", you have earned a discount of $" + discount.toString() + "! Your new total is $"
                    + finalAmount + ".\n";
            } else {
                output += element.name + ", you spent $" + initialAmount
                    + ", if you spend an additional $" + gapToDiscountAmount + " you would qualify for a "
                    + discountPercent + "% discount. Your total is $" + initialAmount + ".\n";
            }
        });
        return output;
    }

    console.log(discountOffer(shoppers, 200, 12));


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Siren's of Titan",
            author: {
                firstName: "Kurt",
                lastName: "Vonnegut Jr."
            }
        },
        {
            title: "The Handmaid's Tale",
            author: {
                firstName: "Margaret",
                lastName: "Atwood"
            }
        },
        {
            title: "The Cider House Rules",
            author: {
                firstName: "John",
                lastName: "Irving"
            }
        },
        {
            title: "The Round House",
            author: {
                firstName: "Louise",
                lastName: "Erdrich"
            }
        },
        {
            title: "The Bone People",
            author: {
                firstName: "Keri",
                lastName: "Hulme"
            }
        }
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // as console logs - redone as a function below
    books.forEach(function (book, counter) {
        console.log("Book # " + (1 + counter));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        var book = {};
        book.title = title;
        book.author = {
            firstName: authorFirstName,
            lastName: authorLastName
        };
        return book;
    }

    books.push(createBook("The Hitchhiker's Guide to the Galaxy", "Douglas", "Adams"));
    books.push(createBook("The Hobbit", "J.R.R.", "Tolkien"));
    books.push(createBook("Oryx and Crake", "Margaret", "Atwood"));
    books.push(createBook("Yertle the Turtle and Other Stories", "Dr.", "Seuss"));
    books.push(createBook("Bird by Bird: Some Instructions on Writing and Life", "Anne", "Lamott"));


    // as a function
    function showBookInfo(arr) {
        var output = "";
        arr.forEach(function (element, index, array) {
            output += "Book # " + (1 + index) + "\n";
            output += "Title: " + element.title + "\n";
            output += "Author: " + element.author.firstName + " " + element.author.lastName + "\n";
            output += "---\n";
        });
        return output;
    }

    console.log(showBookInfo(books));

})();
