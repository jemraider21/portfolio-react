import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import {Card, Responsive} from "semantic-ui-react";

/**
 * File: ProjectCardList.js
 * 
 * @param repos: array of repository objects
 * @param showItems: number to determine how many elements to display
 * 
 * Depending on the value of showItems, create project cards for all of the projects or showItems amount
 * 
 * Send the contents of ProjectCardList to Projects.js
 */
const ProjectCardList = ({repos, showItems}) => {
    let cards = [];
    if(showItems === 3){
        const reposSliced = repos.slice(0,3);
        cards = reposSliced.map((repo, i) => {
            return(
                <ProjectCard repo={repo} key={i} />
            );
        });
    } else {
        cards = repos.map((repo, i) => {
            return(
                <ProjectCard repo={repo} key={i}/>
            );
        });
    }

    return(
        <div>
            {/* For mobile screens (ex: cennphones) */}
            <Responsive maxWidth={700}>
                <Card.Group itemsPerRow="1">
                    {cards}
                </Card.Group>
            </Responsive>

            {/* For full screen displays (ex: desktops) */}
            <Responsive minWidth={700}>
                <Card.Group itemsPerRow="3">
                    {cards}
                </Card.Group>
            </Responsive>
        </div>
        
    );
}

export default ProjectCardList;