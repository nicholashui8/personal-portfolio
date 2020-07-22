import React, { Component } from 'react'
import youtubeSynchronizerPreview from '../screenshots/youtube-sync-preview.gif';
import portfolioPreview from '../screenshots/portfolio-preview.png';
import foodFinderPreview from '../screenshots/food-finder-preview.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faNodeJs as Nodejs } from '@fortawesome/free-brands-svg-icons'
import { faReact as react } from '@fortawesome/free-brands-svg-icons'

class Projects extends Component {
    render() {
        return (
            <div className='projectWrapper'>
                <div className='projectPreview'>
                    <div className='imagePreview'>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/youtube_livestream')}>
                            <img className='image-style' src={youtubeSynchronizerPreview} alt="Logo"/>
                        </Link>
                    </div>
                    <div className='textContainer'>
                        <p1 className='projectDescription'>Youtube Synchronizer</p1>
                        <br/>
                        <p1 className='projectDescription'>This web application allows multiple friends to stream Youtube videos together</p1>
                        <br/>
                        <p1 className='projectDescription'>Node.js <FontAwesomeIcon style={nodejsColor} className='iconStyle' icon={Nodejs}/> + Express</p1>
                        <br/>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://youtube-streaming.herokuapp.com/')} >
                            https://youtube-streaming.herokuapp.com/
                        </Link>
                        <br/>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/youtube_livestream')} >
                            https://github.com/nicholashui8/youtube_livestream
                        </Link>
                    </div>
                </div>
                <div className='projectPreview'>
                    <div className='imagePreview'>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/food-finder')}>
                            <img className='image-style' src={foodFinderPreview} alt="Logo"/>
                        </Link>
                    </div>
                    <div className='textContainer'>
                        <p1 className='projectDescription'>Food Finder</p1>
                        <br></br>
                        <p1 className='projectDescription'>This web application allows the user to search for nearby food</p1>
                        <br/>
                        <p1 className='projectDescription'>React.js <FontAwesomeIcon style={reactColor} className='iconStyle' icon={react}/> + Node.js <FontAwesomeIcon  style={nodejsColor}className='iconStyle' icon={Nodejs}/> + Express</p1>
                        <br/>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/food-finder')} >
                            https://github.com/nicholashui8/food-finder
                        </Link>
                    </div>
                </div>
                <div className='projectPreview'>
                    <div className='imagePreview'>
                        <Link class='projectLinks' to="/projects/personal-portfolio">
                            <img className='image-style' src={portfolioPreview} alt="Logo"/>
                        </Link>
                    </div>
                    <div className='textContainer'>
                        <p1 className='projectDescription'>Personal Portfolio</p1>
                        <br/>
                        <p1 className='projectDescription'>This is the website you're currently on!</p1>
                        <br/>
                        <p1 className='projectDescription'>React.js  <FontAwesomeIcon style={reactColor} className='iconStyle' icon={react}/></p1>
                        <br/>
                        <Link class='projectLinks' to="/" onClick={ () => window.open('https://nicholashui8.github.io/personal-portfolio/')}>
                            nicholashui.me
                        </Link>
                        <br/>
                        <Link class='projectLinks' to="/" onClick={ () => window.open('https://github.com/nicholashui8/personal-portfolio')}>
                            https://github.com/nicholashui8/personal-portfolio
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
const nodejsColor = {
    color: 'green',
}
const reactColor = {
    color: '#61DBFB',
}
export default Projects
