import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { faCode as Code } from '@fortawesome/free-solid-svg-icons'
import { faUser as User } from '@fortawesome/free-solid-svg-icons'
import { faFile as Resume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as Email } from '@fortawesome/free-solid-svg-icons'

import { faLinkedin as linkedin } from '@fortawesome/free-brands-svg-icons'


function Home(){
        return (
            <div>
                <div className="basic-info">
                    <h1 className="">Hello!</h1>
                    <h1 className="introName">My name is </h1>
                    <h1 className="introName" style={colorMyName}>Nicholas</h1>
                    <h1 className="introName">.</h1>
                    <br></br><br></br>
                    <h1 className="introUni">I am currently a student studying at</h1>
                    <h1 className="introUni" style={colorUniBlue}> San</h1>
                    <h1 className="introUni" style={colorUniYellow}> Jose</h1>
                    <h1 className="introUni" style={colorUniBlue}v> State</h1>
                    <h1 className="introUni" style={colorUniYellow}v> University</h1>
                    <h1 className="introUni">.</h1>
                </div>
                <div className='homepageLinks'> 
                    <ul className='navStyle'>
                        <li className='eachLink'>
                            <Link className='link' to="/about">
                                <FontAwesomeIcon className='link' icon={User}/>
                                About
                            </Link>
                        </li>
                        <li className='eachLink'>
                            <Link className='link' to="/" onClick={ () => window.open('https://docs.google.com/document/d/1o9f67Gkijv9BxsJ5U1iJj8EkCrRWa4SPJrzmbXixEQE/edit?usp=sharing')}>
                                <FontAwesomeIcon className='link' icon={Resume}/>
                                Resume
                            </Link>
                        </li>
                        <li className='eachLink'>
                            
                            <Link className='link' to="/projects">
                                <FontAwesomeIcon className='link' icon={Code}/>
                                Projects
                            </Link>
                        </li>
                        <li className='eachLink'>
                            <Link className='link' to="" onClick={ () => window.open("https://www.linkedin.com/in/nicholas-hui-b13297180/")}>
                                <FontAwesomeIcon className='link' icon={linkedin}/>
                                Linkedin
                            </Link>
                        </li>
                        <li className='eachLink'>
                            <Link className='link' to="" onClick={ () => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nicholas.hui@sjsu.edu")}>
                                <FontAwesomeIcon className='link' icon={Email}/>
                                nicholas.hui@sjsu.edu
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

const colorMyName = {
    color:  '#FF6961',
}
const colorUniBlue = {
    color:  '#0066FF',
}

const colorUniYellow = {
    color:  '#FFCC00',
}
export default Home
