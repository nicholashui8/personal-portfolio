import React, { Component } from 'react'
import youtubeSynchronizerPreview from '../screenshots/youtube-sync-preview.gif';
import portfolioPreview from '../screenshots/portfolio-preview.png';
import foodFinderPreview from '../screenshots/food-finder-preview.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../App.css'
import {Grid} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faNodeJs as Nodejs } from '@fortawesome/free-brands-svg-icons'
import { faReact as react } from '@fortawesome/free-brands-svg-icons'
const container = {
    height: '1000px',
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '70px',
    backgroundColor: 'white',
};
const nodejsColor = {
    color: 'green',
}
const reactColor = {
    color: '#61DBFB',
}
const projectTitle = {
    backgrounColor: 'red',
    color: '#FF6961',
    fontSize: '27px',
    letterSpacing: '1.75px',

}
const gridStyle = {
    backgroundColor: 'white',
    width: '60%',
    margin: 'auto',
    textAlign: 'left',
}
export default function Projects() {
    return (
        <div style={container}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <div className='imagePreview'>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/youtube_livestream')}>
                            <img className='image-style' src={youtubeSynchronizerPreview} alt="Logo"/>
                        </Link>
                    </div>
                </Grid>
                <Grid container spacing={1} style={gridStyle}>
                    <Grid item xs={12}>
                        <p1  style={projectTitle} className='projectDescription'>Youtube Synchronizer</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <p1 className='projectDescription'>This web application allows multiple friends to stream Youtube videos together</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <p1 className='projectDescription'>Node.js <FontAwesomeIcon style={nodejsColor} className='iconStyle' icon={Nodejs}/> + Express</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://youtube-streaming.herokuapp.com/')} >
                            <p2>https://youtube-streaming.herokuapp.com/</p2>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/youtube_livestream')} >
                            <p3>https://github.com/nicholashui8/youtube_livestream</p3>
                        </Link>
                    </Grid>
                </Grid>



                <Grid item xs={12}  style={{marginTop: '100px',}}>
                    <div className='imagePreview'>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/food-finder')}>
                            <img className='image-style' src={foodFinderPreview} alt="Logo"/>
                        </Link>
                    </div>
                </Grid>
                <Grid container spacing={2} style={gridStyle}>
                    <Grid item xs={12}>
                        <p1 style={projectTitle} className='projectDescription'>Food Finder</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <p1 className='projectDescription'>This web application allows the user to search for nearby food</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <p1 className='projectDescription'>React.js <FontAwesomeIcon style={reactColor} className='iconStyle' icon={react}/> + Node.js <FontAwesomeIcon  style={nodejsColor}className='iconStyle' icon={Nodejs}/> + Express</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <Link class='projectLinks' to="/projects" onClick={ () => window.open('https://github.com/nicholashui8/food-finder')} >
                            https://github.com/nicholashui8/food-finder
                        </Link>
                    </Grid>
                </Grid>



                <Grid item xs={12}  style={{marginTop: '100px',}}>
                    <div className='imagePreview'>
                        <Link class='projectLinks' to="/projects/personal-portfolio">
                            <img className='image-style' src={portfolioPreview} alt="Logo"/>
                        </Link>
                    </div>
                </Grid>
                <Grid container spacing={1} style={gridStyle}>
                    <Grid item xs={12}>
                        <p1 style={projectTitle}  className='projectDescription'>Personal Portfolio</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <p1 className='projectDescription'>This is the website you're currently on!</p1>
                    </Grid>
                    <Grid item xs={12}>
                        <p1 className='projectDescription'>React.js  <FontAwesomeIcon style={reactColor} className='iconStyle' icon={react}/></p1>
                    </Grid>
                    <Grid item xs={12}>
                        <Link class='projectLinks' to="/" onClick={ () => window.open('https://nicholashui8.github.io/personal-portfolio/')}>
                            nicholashui.me
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link class='projectLinks' to="/" onClick={ () => window.open('https://github.com/nicholashui8/personal-portfolio')}>
                            https://github.com/nicholashui8/personal-portfolio
                        </Link>
                    </Grid>
                </Grid>
    
            </Grid>

            
        </div>
    )
}

/*
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
                        <p1  style={projectTitle} className='projectDescription'>Youtube Synchronizer</p1>
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
                        <p1 style={projectTitle} className='projectDescription'>Food Finder</p1>
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
                        <p1 style={projectTitle}  className='projectDescription'>Personal Portfolio</p1>
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
const projectTitle = {
    backgrounColor: 'red',
    color: '#FF6961',
    fontSize: '27px',
    letterSpacing: '1.75px',

}
export default Projects
*/