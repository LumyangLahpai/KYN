import React, { Component } from 'react';
import './Home.css';
import Kyn from '../img/kyn.png';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">KNOW YOUR NEIGHBOURHOOD</h1>
                    <div className="container">
                        
                        <img src={Kyn} alt="KNOW YOUR NEIGHBOURHOOD "></img>
                    </div>
            </div>
        )
    }
}

export default Home;