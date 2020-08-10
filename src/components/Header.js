import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import resume from '../Nicholas-Hui-Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as Bar } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showHamLinks: false,
            extendHeader: false,
        };
    }
    hamburgerHasBeenClicked() {

        console.log('Ham has been clicked');
        console.log(this.state.showHamLinks);
       
        this.setState({
            showHamLinks: !this.state.showHamLinks,
            extendHeader: !this.state.extendHeader,
        });
    }
    getHeaderStyle = () => {
        return {
            height: this.state.extendHeader ? '310px' : '90px',
        }
    }
    getStyle = () => {
        return{
            display: this.state.showHamLinks ? 'inline-block' : 'none',
            backgroundColor: 'white',
            marginTop: '45px',
            marginLeft: '5%',
            paddingTop: 'none',
        }
    }
    shortenHeader(){
        this.setState({
            extendHeader: false,
            showHamLinks: false,
        });
    }
   
    render() {
        return (
            <div className='headerStyle' style={this.getHeaderStyle()}>
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
                <div className='hamburgerContainer' onClick={ () => this.hamburgerHasBeenClicked()}>
                    <FontAwesomeIcon  className='hamStyle' icon={Bar}/>
                </div>
                <MediaQuery maxWidth={'1000px'} onChange={() => this.shortenHeader()}>
                    <div style={this.getStyle() } className='eachLinkHeaderHam'>     
                        <ul className='hamNavStyle'>
                            <li className='eachLinkHeaderHam'>
                                <Link className='link' to="/about">About</Link>
                            </li>
                            <li className='eachLinkHeaderHam'>
                                <Link className='link'  to="#" onClick={ () => window.open(resume)}>Resume</Link>
                            </li>
                            <li className='eachLinkHeaderHam'>
                                <Link className='link'  to="/projects">Projects</Link>
                            </li>
                            <li className='eachLinkHeaderHam'>
                                <Link className='link' to="#" onClick={ () => window.open("https://github.com/nicholashui8")}>Github</Link>
                            </li>
                            <li className='eachLinkHeaderHam'>
                                <Link className='link' to="#" onClick={ () => window.open("https://www.linkedin.com/in/nicholas-hui-b13297180/")}>Linkedin</Link>
                            </li>
                        </ul>
                    </div>
                </MediaQuery>
                
            </div>
        )
    }
}
export default Header
