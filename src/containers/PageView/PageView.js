import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
/**
 * File: PageView.js
 * 
 * @param route: the value of route from this.state.route in App.js
 * 
 * Create a function PageView that displays content from a route component
 * Determine route's value and display the component corresponding to the desired route
 * 
 * Send the contents of PageView to Contnet.js
 */
const PageView = ({route}) => {
    switch(route){
        case "about":
            return <AboutMe />;
        case "projects":
            return <Projects />;
        case "contact":
            return <Contact />;
        default:
            return <h1>Error displaying a webpage</h1>
    }
}

export default PageView;