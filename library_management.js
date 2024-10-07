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


