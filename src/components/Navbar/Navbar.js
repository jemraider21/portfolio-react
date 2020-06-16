import React from "react";
import {Menu} from "semantic-ui-react"
import Logo from "../../elements/img/CrestNoGlow.png";
import menuOptions from "../../Objects/UserSelection";

/**
 * File: Navbar.js
 * 
 * @param newRoute: a function to change the value of this.state.route in App.js
 * 
 * Create a function Navbar that displays a navigation bar on the top of the screen
 * Importing an array of objects from UserSelection.js called menuOptions, dynamically create elements from menuOptions for the user to navigate the web app
 * 
 * Send the contents of Navbar back to Content.js
 */
const Navbar = ({newRoute}) => {
    /**
     * Loop over the array of objects in menuOptions and create a menu item for the navbar. Pass newRoute to the item to handle route changes when item is clicked on
     * Return the array of menu items to array menuContent
     */
    const menuContent = menuOptions.map((content, i) => {
        return(
            <Menu.Item key={i} onClick={newRoute} id={content.id} link name={content.name}/>
        );
    });

    /**
     * On the left side of the navbar, have a logo that, when clicked, sends the user back to the home screen (Home.js)
     * On the right, display the contents of array menuContent
     */
    return(
        <Menu inverted>
            <Menu.Item onClick={newRoute} id="home" position="left">
                <img src={Logo} alt="logo" width="100px" />
            </Menu.Item>
            {menuContent}
        </Menu>
    )
};

export default Navbar;