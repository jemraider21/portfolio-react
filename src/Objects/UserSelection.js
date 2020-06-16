/**
 * File: UserSelection.js
 * 
 * Create a class Option to create objects witht the following properties:
 *      id: the id of an element (String)
 *      name: the text for the element (String)
 * Create an array userSelection to hold multiple Option objects
 * 
 * Send userSelection to a component calling it
 */
class Option {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

const userSelection = [
    new Option("about", "About Me"),
    new Option("projects", "Projects"),
    new Option("contact", "Contact Me")
];

export default userSelection;