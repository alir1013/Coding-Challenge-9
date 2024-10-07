//Task 1: Creating a Book Class
class Book {
    constructor(title,author,ISBN){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this._isAvailable = true;
    }
    getDetails(){
        return `Title:${this.title} Author: ${this.author} ISBN: ${this.ISBN}`;
    }
    get isAvailable(){
        return this._isAvailable;
    }
    set isAvailable(status) {
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

