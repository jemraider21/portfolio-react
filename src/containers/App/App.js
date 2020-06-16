import React, { Component } from 'react';
import './App.css';
import Particles from "react-particles-js";
import Home from "../../components/Home/Home";
import Content from "../Content/Content";

const particlesOptions = {
	particles: {
		number: {
			value: 20,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}

/**
 * File: App.js
 * 
 * @param none
 * 
 * Creates a class called App to handles the status of the webpage, and ultimately controls what gets displayed to the user
 * 
 * Send the contents of App back to index.js
 */
class App extends Component {
	/**
	 * function: constructor()
	 * 
	 * @params none
	 * 
	 * Instantiates the state object and sets an initial value to the route property to "home"
	 * this.state.route: one of five statuses used to travel throughout the web app. The following states are as followed:
	 * 		"home": displays the home screen page
	 * 		"about": displays the "About Me" screen page
	 * 		"projects": displays the "Projects" screen page
	 * 		"resume": displays the "My Resume" screen page
	 * 		"contact": displays the "Contact Me" screen page
	 */
	constructor(){
		super();
		this.state = {
			route: "home" 
		}
	}

	/**
	 * function: routeChanger()
	 * 
	 * @params event
	 * 
	 * Change the value inside of this.state.route
	 * Function is called when pressing any of the buttons on the home screen or clicking one of the options in the Navbar component
	 * Each button/element sends back the click event, and the function grams the id from the element that the event is targeting
	 * The function then sets the value of the route to the id from the element
	 */
	routeChanger = event => {
		const newRoute = event.currentTarget.id;
		this.setState({route: newRoute});
	}

	routeDisplay = () => {
		if(this.state.route === "home"){
			return <Home newRoute={this.routeChanger} />
		} else {
			return(
				<Content route={this.state.route} newRoute={this.routeChanger}/>
			);
		}
	}

	/**
	 * function: render()
	 * 
	 * @params none
	 * 
	 * Displays a component based on the value of this.state.route
	 * If this.state.route is "home", display the Home component, and pass routeChanger function for the buttons on the screen
	 * If this.state.route is anything else, display the Content component, and pass this.state.route and the routeChanger function
	 */
	render(){
		return(
			<div>
				<Particles params={particlesOptions} className="particles" />
				{this.routeDisplay()}
			</div>
		);
	}
}

export default App;