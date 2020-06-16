import React from "react";
import {Button} from "semantic-ui-react"

/**
 * File: LiveButton.js
 * 
 * @param liveVersion: url link to the live version 
 * 
 * Determine if param liveVersion has a url
 *      if there is a url, make the button clickable
 *      if there is not a url: disbable the button
 * 
 * Export LiveButton to ProjectCard.js
 */
const LiveButton = ({liveVersion}) => {
    if(liveVersion === null){
        return (
            <Button disabled>
                <p>See Live Version</p>  
            </Button>
        );
    } else if(liveVersion === ""){
        return (
            <Button disabled>
                <p>See Live Version</p>  
            </Button>
        );
    } else {
        return (
            <Button>
                <a href={liveVersion} target="blank">See Live Version</a>  
            </Button>
        );
    }
}

export default LiveButton;