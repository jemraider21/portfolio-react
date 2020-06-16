import React from "react";
import "./Contact.css";
import {Button, Icon, Responsive, Container, Transition} from "semantic-ui-react";
import contactMe from "../../Objects/ContactMe";

/**
 * File: Contact.js
 * 
 * @param none
 * 
 * Importing contactMe from "ContactMe.js", an array of objects for social media accounts
 * Display buttons to take the user to a specific social media page
 * 
 * Send the contents of Contact to PageView.js
 */
const Contact = () => {
    const buttonGroups = () => {
        return(
            <div>
                <Responsive minWidth={200}>
                    <Container textAlign="center">
                        {buttons}
                    </Container>
                </Responsive>
            </div>
        );
    }
    
    /**
     * Loop through contactMe and dynamically create a button with an icon and a link
     * Add those buttons to array buttons
     */
    const buttons = contactMe.map((method, i) => {
        return(
            <a href={method.url} target="blank" key={i}>
                <Button  color={method.buttonColor} size="massive">
                    <Icon name={method.iconName} color={method.color} size="large"/>
                    {method.name}
                </Button>
            </a>
        );
    })

    return(
        <div>
            <h1 className="page-title info-text">Contact</h1>
            <p className="info-text">Want to get into contact with me? Follow me on social media or send me a direct email! I can't wait to get to know you!</p>
            <div>
                {buttonGroups()}
            </div>
        </div>
    );
}

export default Contact;