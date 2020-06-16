import React, { Component } from "react";
import Languages from "../../Objects/Languages";
import Logo from "../../elements/img/CrestNoGlow.png";
import PreviewCard from "../PreviewCard/PreviewCard";
import ContentCard from "../ContentCard/ContentCard"

/**
 * File: ProjectCard.js
 * 
 * @param props.repo: the repository the card will be working with
 */
class ProjectCard2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.repo.name,
            fullName: props.repo.full_name,
            created: props.repo.created_at,
            description: props.repo.description,
            repoLink: props.repo.html_url,
            liveVersion: props.repo.homepage,
            language: props.repo.language,
            key: props.i,
            files: [],
            image: Logo,
            previewImage: "",
            cardDisplay: "preview"
        }
    }


    componentDidMount(){
        this.setImage();
        this.setPreviewImage();
        this.changeName();
    }

    /**\
     * function: changeView()
     * 
     * @param event
     * 
     * Taking the value of this.state.cardDisplay, when the card is pressed, change the view
     * Ex: if this.state.cardDisplay = preview, change it to content
     */
    changeView = () => {
        const {cardDisplay} = this.state;
        // console.log(cardDisplay);
        switch(cardDisplay){
            case "preview": this.setState({cardDisplay: "content"}); break;
            default: this.setState({cardDisplay: "preview"});
        }
    }

    /**
     * Importing an array of objects from Languages.js called Languages, loop through Languages and if Language.name is the same as param language, set Language.url to image
     */
    setImage(){
        // eslint-disable-next-line array-callback-return
        Languages.map(Language => {
            if(this.state.language === Language.name){
                this.setState({image: Language.url});
            }
        });
    }

    setPreviewImage(){
        this.setState({previewImage: `https://github.com/jemraider21/${this.state.name}/blob/master/preview.png?raw=true`});
    }

    /**
     * Function: setCharAt()
     * 
     * @param name: name of the repository
     * @param index: index of the character to make uppercase
     * @param chr: uppercase version of character to be replaced
     *  
     * In name, replace the character at index with char
     * Return name
     */
    setCharAt = (name, index, chr) => {
        if(index > name.length-1){ return name }
        return name.substr(0, index) +chr +name.substr(index+1);
    }

    /**
     * Process param name by replacing all "-" and "_" with a space " "
     * Loop through name and if there is a character with a space, set the next character to uppercase
     */
    changeName(){
        let {name} = this.state
        name = name.replace(/-/g, " ").replace(/_/g, " ");
        for(let i = 0; i < name.length; i++){
            const char = name.charAt(i);
            
            // Make the first character of the name uppercase
            if(i === 0){
                name = this.setCharAt(name, i, name[i].toUpperCase());
            }

            // Make the character after char into an uppercase
            if(char === " "){
                const k = i+1;
                name = this.setCharAt(name, k, name[k].toUpperCase());
            } 
        }
        this.setState({name: name});
    }

    /**
     * Returns a card that displays the language image, name, date, description, and buttons for the repository
     */
    render(){
        const {image, previewImage,name, created, description, liveVersion, repoLink, cardDisplay, fullName} = this.state;

        switch(cardDisplay){
            case "preview": {
                return(
                    <PreviewCard 
                        fullName={fullName}
                        changeView={this.changeView}
                    />
                );
            }
            default: {
                return(
                    <ContentCard 
                        name={name}
                        created={created.substr(0, 10)} // Formatting the date to only include the year, month, and day
                        description={description}
                        repoLink={repoLink}
                        liveVersion={liveVersion}
                        image={image}
                        previewImage={previewImage}
                        changeView={this.changeView}
                    />
                );
            }
        }
    }
}

export default ProjectCard2;