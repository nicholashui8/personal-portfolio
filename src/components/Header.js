import React, { Component } from 'react'
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import resume from '../Nicholas-Hui-Resume.pdf'
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
                            <Link className='link' to="/about">About</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link className='link'  to="#" onClick={ () => window.open(resume)}>Resume</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link className='link'  to="/projects">Projects</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link className='link' to="#" onClick={ () => window.open("https://github.com/nicholashui8")}>Github</Link>
                        </li>
                        <li className='eachLinkHeader'>
                            <Link className='link' to="#" onClick={ () => window.open("https://www.linkedin.com/in/nicholas-hui-b13297180/")}>Linkedin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
