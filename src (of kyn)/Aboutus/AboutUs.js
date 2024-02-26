import React, { Component } from 'react';
import './AboutUs.css';
import About from '../img/About us.png';

class AboutUs extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">AboutUs</h1>
                    <div className="container">
                       <h3>At "Know Your Neighbourhood," our mission is to foster community connections and empower individuals with valuable insights about their local area, so you can make informed decisions and enjoy your neighborhood to the fullest.We are a dedicated team of community enthusiasts who are passionate about bringing you information, stories, and resources that help you discover the hidden gems and vibrant culture within your neighborhood.</h3> 
                        <img src={About} alt="AboutUs"></img>
                    </div>
            </div>
        )
    }
}

export default AboutUs;