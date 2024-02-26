import React, { Component } from 'react';
import './ContactUs.css';
import contact from '../img/Contact_Us.jpg';

class ContactUs extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">Contact Us</h1>
                    <div className="container">
                        <h3>Our "Contact Us" page is your gateway to getting in touch with us about any questions, feedback, or inquiries you may have about your neighborhood and our services.We value your input and are here to assist you, so please feel free to reach out to us through the provided contact information, and our team will be delighted to assist you in exploring and enhancing your local community.</h3>
                        <img src={contact} alt="ContactUs"></img>
                    </div>
            </div>
        )
    }
}

export default ContactUs;