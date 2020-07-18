import React, { Component } from 'react'
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div className='headerStyle'>
                <div className='text-box'>
                    <Link className='logoLetters' to="/">
                        <div className='logo'>
                            <p>NH</p>
                        </div> 
                    </Link>
                </div>
                <div className='groupOfLinks'> 
                    <ul className='navStyle'>
                        <li className='eachLinkHeader'>
                            <Link style={link1} to="/about">About</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link style={link1} to="" onClick={ () => window.open('https://docs.google.com/document/d/1o9f67Gkijv9BxsJ5U1iJj8EkCrRWa4SPJrzmbXixEQE/edit?usp=sharing')}>Resume</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link style={link1} to="/projects">Projects</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link className='link' to="" onClick={ () => window.open("https://www.linkedin.com/in/nicholas-hui-b13297180/")}>Linkedin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
const link1 = {
    textDecoration: 'none',
    color: 'black',
}

export default Header
