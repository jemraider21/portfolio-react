/**
 * File: Languages.js
 * 
 * Create a class Languages to create objects witht the following properties:
 *      name: name of the programming language (String)
 *      url: link to the image (String)
 * Create an array Languages to hold multiple Languages objects
 * 
 * Send Languages to a component calling it
 */
class LanguageClass{
    constructor(name, url){
        this.name = name;
        this.url = url;
    }
}

const Languages = [
    new LanguageClass("Java", "https://codeeasysite.files.wordpress.com/2017/07/java-logo-png-300x300.png"),
    new LanguageClass("C++", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"),
    new LanguageClass("HTML", "https://i.stack.imgur.com/PgcSR.png"),
    new LanguageClass("CSS", "https://i0.wp.com/appliedparticletechnology.com/wp-content/uploads/2016/03/css-logo.png?fit=300%2C300&ssl=1"),
    new LanguageClass("JavaScript", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"),
    new LanguageClass("Python", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"),
    new LanguageClass("React", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"),
    new LanguageClass("null", "https://www.bluehost.com/blog/wp-content/uploads/2016/07/Code-icon-300x300.jpg")
];

export default Languages;