import React from "react";
import "./AboutMe.css"
import {Container, Image, Button, Segment, List, Transition} from "semantic-ui-react";
import Me from "../../elements/img/Profile.jpg"
import SchoolExperience from "../../Objects/SchoolExperience";
import WorkExperiences from "../../Objects/WorkExperience";
import resume from "../../elements/resume/jared-morris-resume.pdf";

/**
 * File: AboutMe.js
 * 
 * @param none
 * 
 * Create a function AboutMe that displays information about me
 * Content will be an introduction about me, my work expereince, my programming experience, and school experience
 * Allow the ability for my resume to be downloaded
 * 
 * Send the contents of AboutMe to PageView.js
 */
const AboutMe = () => {
    /**
     * Looping through array, dynamically create a list element of content
     */
    const listLooper = (arr) => {
        const content = arr.map((element, i) => {
            return <List.Item key={i}>{element}</List.Item>
        });

        return content;
    }
    
    /**
     * Looping through WorkExperiences, dynamically create segments with work epxeirences
     */
    const school = SchoolExperience.map((schoolEx, i) => {
        if(schoolEx.relaventCourses === null){
            return(
                <Segment key={i}>
                    <div>
                        <h1>{schoolEx.degree} - {schoolEx.degreeField}, {schoolEx.degreeRecieved}</h1>
                        <h4>{schoolEx.university} - {schoolEx.location}</h4>
                    </div>
                </Segment>
            );
        } else {
            return(
                <Segment key={i}>
                    <div>
                        <h1>{schoolEx.degree} - {schoolEx.degreeField}, {schoolEx.degreeRecieved}</h1>
                        <h4>{schoolEx.university} - {schoolEx.location}</h4>
                        <h4>Relavent courses:</h4>
                        <List>
                            {listLooper(schoolEx.relaventCourses)}
                        </List>
                    </div>
                </Segment>
            );
        }     
    });

    /**
     * Looping through WorkExperiences, dynamically create segments with work epxeirences
     */
    const work = WorkExperiences.map((workEx, i) => {
        const dateWork = `${workEx.startDate} - ${workEx.endDate}`
        return(
            <Segment key={i} color="blue">
                <div>
                    <h1>{workEx.jobTitle}: {dateWork}</h1>
                    <h4>{workEx.company} - {workEx.location}</h4>
                    <List>
                        {listLooper(workEx.jobDescription)}
                    </List>
                </div>
            </Segment>
        );
    });
    
    return(
        <div>
            <Container>
                {/* Info about me */}
                <Transition transitionOnMount visible="show" animation="scale" duration={1000}>
                    <div className="aboutMe" style={{margin: "0px 0px 50px 0px"}}>
                        <h1 className="page-title info-text">About Me</h1>
                        <Image src={Me} inline/>
                        <p className="info-text" style={{fontSize: "20px"}}>
                            Hi, I'm Jared Morris and I am a junior software developer based in Maryland! I've been studying computer science since high school and ever since then I have been developing my appreciation for technology and building applications. While I'm currently freelancing and working on personal projects, my goal is to work with different companies to make a bigger impact on society.
                        </p>
                    </div>
                </Transition>

                {/* Programming Experience */}

                {/* School Info */}
                <Transition transitionOnMount visible="show" animation="scale" duration={1000}>
                    <div>
                        <h1 className="heading">School Experience</h1>
                    
                        <Segment.Group>
                            {school}
                        </Segment.Group>
                    </div>
                </Transition>
                

                {/* Work Info */}
                <Transition mountOnShow visible="show" animation="scale" duration={1000}>
                    <div>
                        <h1 className="heading">Work Experience</h1>
                    
                        <Segment.Group>
                            {work}
                        </Segment.Group>
                    </div>
                </Transition>
                

                {/* Button to download my resume */}
                <div style={{textAlign: "center", margin: "20px"}}>
                    <Button>
                        <a href={resume} download>Download My Resume</a>
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default AboutMe;