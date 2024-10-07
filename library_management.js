//Task 1:Creating a Book Class
class Book {
    constructor(title,author,ISBN){ //Constructor initilizes the object when a new instance is created
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this._isAvailable = true;
    }
    getDetails(){  //returns a string with the book title, author, and ISBN
        return `Title:${this.title} Author: ${this.author} ISBN: ${this.ISBN}`;
    }
    get isAvailable(){  // Getter returns a formated string 
        return this._isAvailable;
    }
    set isAvailable(status) {  //Setter returns updated status
        if (status === true){
            this._isAvailable = true;
        console.log(`${this.title} is available`);
    }
            else if (status === false){
            this._isAvailable = false;
            console.log(`${this.title} is unavailable`);
            } else {
         console.log("Not Found")

    }}}


    //Task 2:Creating a Section Class
    class Section {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){   //Adds a book to the book array
        this.books.push(book);
    }
    getAvailableBooks(){
        return this.books.reduce((total,book) => {
            return total + (book.isAvailable ? 1: 0); //Returns the total number of available books in the section
        },0);
    }
    listBooks(){
        this.books.forEach(book =>{
            console.log(`${book.title}: ${book.isAvailable ? "Available" : "Borrowed"}`); //Lists all books in the section, showing their title and availability
        });
    } }
   //Task 5:calculates the total number of books that are available for borrowing in the section
    calculateTotalBooksAvailable(){
        return this.books.reduce((total,book) => {
            return total + (book.isAvailable ? 1:0);
        },0);
    }

//Task 3:Creating a Patron Class

class Patron {
    constructor(name){
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book){  //Allows the patron to borrow a book if it is available and updates the book’s status
        if (book.isAvailable){
            this.borrowedBooks.push(book);
            book.isAvailable = false;
        } }
    returnBook(book){  //Allows the patron to return a borrowed book, making it available again
        const bookIsFound= this.borrowedBooks.find(borrowedBook => borrowedBook === book);
        if (bookIsFound){
            this.borrowedBooks = this.borrowedBooks.filter(borrowedBook => borrowedBook !== book);
            book.isAvailable = true;
        }}}

//Task 4: Creating a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron{  //VIPPatron class inherits from the patron class
    constructor(name, priorty){
        super(name);
        this.priority = true;
    }
    borrowBook(book){  
        if (book._isAvailable){   //Overriding the borrowBook method
            this.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log (`VIP member ${this.name} borrowed: ${book.title} by ${this.author}`);
        }}
        getDetails(){
            console.log(`${this.name} is a VIP Patron with priority: ${this.priority}.`);  
        }
}

//Task 5: Handle Book Borrowing and Returning
//added this to task 2: calculateTotalBooksAvailable(){return this.books.reduce((total,book) => { return total + (book.isAvailable ? 1:0);  },0);

//Task 6:Create and Manage Sections and Patrons

// Create sections

const fiction = new Section("Fiction");

const science = new Section("Science");

// Create books

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "1234567890");

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");

const book3 = new Book("The Elegant Universe", "Brian Greene", "1122334455");



// Add books to sections

fiction.addBook(book1);

fiction.addBook(book2);

science.addBook(book3);

// Create patrons

const regularPatron = new Patron("Apple Jane");

const vipPatron = new VIPPatron("George Washington", true);

// Regular patron tries to borrow a book

regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)

vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);



// List books and availability

fiction.listBooks();

// Calculate total available books in each section

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);

console.log(`Total available books in Science: ${science.getAvailableBooks()}`);