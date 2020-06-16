/**
 * File: ContactMe.js
 * 
 * Create a class Contact to create objects witht the following properties:
 *      name: name of the social media site (String)
 *      iconName: icon name from Semantic UI (String)
 *      color: color of the icon (String)
 *      buttonColor: color of the button (String)
 *      url: link to the account (String)
 * Create an array contactMe to hold multiple Contact objects
 * 
 * Send contactMe to a component calling it
 */
class Contact {
    constructor(name, iconName, color, buttonColor, url){
        this.name = name;
        this.iconName = iconName;
        this.color = color;
        this.buttonColor = buttonColor;
        this.url = url;
    }
}

const contactMe = [
    new Contact("GitHub", "github", "white", "black", "https://github.com/jemraider21"),
    new Contact("LinkedIn", "linkedin", "white", "linkedin", "https://www.linkedin.com/in/jared-morris-b43527b9/"),
    new Contact("Email", "mail", "black", "white", "mailto:jemraider21@gmail.com")
];

export default contactMe;