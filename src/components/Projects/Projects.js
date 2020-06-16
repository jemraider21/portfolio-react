import React, { Component } from "react";
import "./Projects.css";
import ProjectCardList from "../ProjectCardList/ProjectCardList";
import {Button, Container, Transition }from "semantic-ui-react"

/**
 * File: Projects.js
 * 
 * @param none
 * 
 * Create a class Project that stores the repositories from GitHub and display them
 * Repositories will be displayed in reverse chronological order, so the first repository is the most recent one created
 * 
 * Send the contents of Projects to PageView.js
 */
class Projects extends Component {
    /**
     * function: constructor()
     * 
     * @param none
     * 
     * Instantiates the state object and create the following properties:
     *      this.state.repos: array of repository objects
     *      this.state.repoListDisplay: one of two statuses to determine how many repositories to display:
     *          "small": Initial display. Displays the first n repositories from this.state.repos
     *          "large": Displays all repositories from this.state.repos
     */
    constructor(){
        super();
        this.state ={
            repos: [],
            repoListDisplay: "small"
        }
    }

    /**
     * function: sortByDate()
     * 
     * @param repos: array or repository objects
     * 
     * Using the bubble sort algorithm, go through array repos and sort all entries by their created_at property from newest to oldest
     * 
     * Return array repos
     */
    sortByDate(repos){
        const len = repos.length-1;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (repos[j].created_at < repos[j + 1].created_at) {
                    let tmp = repos[j];
                    repos[j] = repos[j + 1];
                    repos[j + 1] = tmp;
                }
            }
        }
        return repos;     
    }

    /**
     * function: componentDidMount()
     * 
     * @param none
     * 
     * When the Projects component loads, gather the repositorues from the GitHub api
     * Sort the repositories by their created_at property
     * Set the value of this.state.repos to the sorted repositories
     */
    componentDidMount(){
        fetch("https://api.github.com/users/jemraider21/repos")
        .then(response => response.json())
        .then(repos => {
            repos = this.sortByDate(repos); // Sort the repos array in decending order (newest -> oldest)
            this.setState({repos: repos})
        });
    }

    /**
     * function: alterSize()
     * 
     * @param event: the callback event from the button press
     * 
     * Grab the html text from the button calling the function
     * Depending on the text of the button, set this.state.repoListDisplay to either "small" or "large"
     */
    alterSize = event => {
        const text = event.currentTarget.innerHTML;
        if(text === "Click to See More"){
            this.setState({repoListDisplay: "large"});
        } else {
            this.setState({repoListDisplay: "small"});
        }
    }

    /**
     * function: content()
     * @param repos: array of repository objects
     * @param contentAmount: text for capiton of how many repos are displayed
     * @param seeContent: text for button action
     * @param items: number to determine how many elements to display
     * 
     * Returns the heading, caption, list of project cards, and action button
     */
    content = (repos, contentAmount, seeContent, items) => {
        return(
            <div>
                {/* <Header as="h1" textAlign="center" color="white">My Projects</Header>
                <Header as="p" textAlign="center">{contentAmount}. Check them out!</Header> */}
                <Container>
                    <Transition transitionOnMount visible="show" animation="scale" duration={1000}>
                        <div style={{margin: "0px 0px 50px 0px"}}>
                            <h1 className="page-title info-text">My Projects</h1>
                            <p className="info-text">{contentAmount}. Check them out!</p>
                        </div>
                    </Transition>
                </Container>

                <Container>
                    <Transition transitionOnMount visible="show" animation="scale" duration={1000}>
                        <ProjectCardList repos={repos} showItems={items} />
                    </Transition>
                </Container>

                <Container style={{textAlign: "center"}}>
                    <div style={{margin: "50px 0px 0px 0px"}}>
                        <Button onClick={this.alterSize}>Click to {seeContent}</Button>
                    </div>
                </Container>
            </div>
        );
    }

    /**
     * function: render()
     * 
     * @param none
     * 
     * Depending on the value of this.state.repoListDisplay, return the value of content with the dependent data
     */
    render(){
        const {repoListDisplay, repos} = this.state;
        // let seeContent = "";
        switch(repoListDisplay){
            case "small": 
                return this.content(repos, "Here are the most recent projects","See More", 3);
            case "large": 
                return this.content(repos, "Here are all of my projects", "See Less", repos.length);
            default: 
                return <h1>Error with button press</h1>;
        }
    }
}

export default Projects;