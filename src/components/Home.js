import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { faCode as Code } from '@fortawesome/free-solid-svg-icons'
import { faUser as User } from '@fortawesome/free-solid-svg-icons'
import { faFile as Resume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as Email } from '@fortawesome/free-solid-svg-icons'
import { faGithub as Github } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn as Linkedin } from '@fortawesome/free-brands-svg-icons'
import resume from '../Nicholas-Hui-Resume.pdf'


//This is the root page
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
                <Link className='sjsuLink' to="" onClick={ () => window.open("https://www.sjsu.edu/")}>
                    <h1 className="introUni" style={colorUniBlue}> San</h1>
                    <h1 className="introUni" style={colorUniYellow}> Jose</h1>
                    <h1 className="introUni" style={colorUniBlue}v> State</h1>
                    <h1 className="introUni" style={colorUniYellow}v> University</h1>
                </Link>
                <h1 className="introUni">.</h1>
                
            </div>
            <div className='homepageLinks'> 
                <ul className='navStyle'>
                    <li className='eachLink'>
                        <Link className='link' to="/about">
                            <FontAwesomeIcon className='iconStyle' icon={User}/>
                            About
                        </Link>
                    </li>
                    <li className='eachLink'>
                        <Link className='link' to={window.location.pathname} hash="/#"HASH onClick={ () => window.open(resume)}>
                            <FontAwesomeIcon className='iconStyle' icon={Resume}/>
                            Resume
                        </Link>
                    </li>
                    <li className='eachLink'>
                        <Link className='link' to="/projects">
                            <FontAwesomeIcon className='iconStyle' icon={Code}/>
                            Projects
                        </Link>
                    </li>
                    <li className='eachLink'>
                        <Link className='link' to="" onClick={ () => window.open("https://www.linkedin.com/in/nicholas-hui-b13297180/")}>
                            <FontAwesomeIcon className='iconStyle' icon={Linkedin}/>
                            Linkedin
                        </Link>
                    </li>
                    <li className='eachLink'>
                        <Link className='link' to="" onClick={ () => window.open("https://github.com/nicholashui8")}>
                            <FontAwesomeIcon className='iconStyle' icon={Github}/>
                            Github
                        </Link>
                    </li>
                    <li className='eachLink'>
                        <Link className='link' to="" onClick={ () => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nicholashui8@gmail.com")}>
                            <FontAwesomeIcon className='iconStyle' icon={Email}/>
                            nicholashui8@gmail.com
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
//makes my name red
const colorMyName = {
    color:  '#FF6961',
}
//makes SJSU text blue
const colorUniBlue = {
    color:  '#0066FF',
}
//makes SJSU text yellow
const colorUniYellow = {
    color:  '#FFCC00',
}
export default Home
