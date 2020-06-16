import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageView from "../PageView/PageView";

/**
 * File: Content.js
 * 
 * @param route: the value of route from this.state.route in App.js
 * @param newRoute: a function to change the value of this.state.route in App.js
 * 
 * Create a function Content that displays the Navbar component ontop of the PageView component
 * 
 * Send the contents of Content back to App.js
 */
const Content = ({route, newRoute}) => {
    return (
        <div>
            <Navbar newRoute={newRoute}/>
            <PageView route={route}/>
        </div>
    );
};

export default Content;