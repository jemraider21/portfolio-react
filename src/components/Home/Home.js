import React from "react";
import "./Home.css"
import {Button, Container, Responsive, Transition} from "semantic-ui-react";
import Typical from "react-typical";
import buttonRoutes from "../../Objects/UserSelection";

/**
 * File: Home.js
 * 
 * @param newRoute: a function passed down by App.js. When called, send an event back to App.js with the button element as it's target. Get the id of the button to change the state of the route
 * 
 * Create a function called Home to handle all content for this webpage
 * Importing an array of objects from UserSelection.js called buttonRoutes, dynamically create buttons from buttonRoute, and display them alongside a welcome message to the user
 * 
 * Send the contents of Home back to App.js
 */
const Home = ({newRoute}) => {
    /**
     * Create an empty array for buttons
     * Using the buttonRoutes array being imported from "UserSelection.js", dynamically create buttons for each object inside of buttonRoutes
     * If a button is clicked on, call the newRoute function
     */
    let buttons = [];
    buttons = buttonRoutes.map((action, i) => {
        return(
            <Button id={action.id} color="purple" onClick={newRoute}size="huge" className="button-el" key={i}>
                {action.name}
            </Button>
        );
    });

    /**
     * Display a welcome message to the user and display the buttons for the routes
     * If the screen width is that for mobile devices, display the buttons stacked on top of eachother
     * If the screen width is larger than that of a mobile device, display the buttons next to each other on the same line
     */
    return(
        <div className="home-page centered-content">
            <Responsive minWidth={200}>
                <Transition transitionOnMount visible="show" animation="scale" duration={1000}>
                    <h1 className="title">Hi, I'm <span className="special">Jared</span>!</h1>
                </Transition>
                <Transition transitionOnMount visible="show" animation="scale" duration={2000}>
                    <h2 className="subtitle">
                        And I am a 
                        <span className="special changingText">
                            <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    " Computer Scientist!",
                                    2000,
                                    " Software Developer!",
                                    2000,
                                    " Web Developer!",
                                    2000
                                ]}
                            />
                        </span>
                    </h2>
                </Transition>
                <Container textAlign="center">
                    {buttons}
                </Container>
            </Responsive>
        </div>
    );
}

export default Home;