//Task 1: Creating a Book Class
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


    //Creating a Section Class
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

