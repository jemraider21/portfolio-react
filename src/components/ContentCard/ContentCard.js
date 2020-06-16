import React from "react";
import LiveButton from "../LiveButton/LiveButton";
import {Card, Image, Container, Button, Divider} from "semantic-ui-react";

/**
 * File: ProjectCard.js
 * 
 * @param name: name of the repository
 * @param created: date of when the repository was created
 * @param description: the description of the repository
 * @param repoLink: the url link to the repository (ex: github.com/user/repoName) 
 * @param liveVersion: the url link to a live version of the repository, if available
 * @param language: the language the repository was written in (ex: Java, C++, ect)
 */
const ProjectCard = ({name, created, description, repoLink, liveVersion, image, changeView}) => {
    return(
        <Card onClick={changeView}>
            
            <Card.Content>
                <Card.Header> 
                    <Image src={image} size="tiny"/>
                    {name}
                </Card.Header>
                <Divider />
                <Card.Meta>
                    Created {created}
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
                <Container>
                    <LiveButton liveVersion={liveVersion}/> {/* Used to determine if there is a valid live version url*/}
                    <Button>
                        <a href={repoLink} target="blank">See Github Repo</a>
                    </Button>
                </Container>
            </Card.Content>
        </Card>
    );
}

export default ProjectCard;