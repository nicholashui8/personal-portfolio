import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

const container = {
    height: '500px',
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '75px',
    backgroundColor: 'white',
};

export default function About() {
    return (
        <div style={container}>
            <Grid container >
                <Grid item xs={12}>
                    <h1>I'm a third year student studying computer science at San Jose State University.</h1>
                </Grid>
                <Grid item xs={12}>
                    <h1>I'm currently seeking Summer 2021 internships!</h1>
                </Grid>
                <Grid item xs={12}>
                    <h1>In my spare time I like playing badminton and drinking boba with friends.</h1>
                </Grid>
            </Grid>
        </div>
        
    )
}

/*
class About extends Component {
    render() {
        return (
            <div style={paragraphStyle}>
                <h1>I'm a third year student studying computer science at San Jose State University.</h1>
                <h1>I'm currently seeking Fall 2020 internships!</h1>
                <h1>In my spare time I like playing badminton and drinking boba with friends.</h1>
            </div>
        )
    }
}
const paragraphStyle = {
    backgroundColor: 'white',
    width: '80%',
    marginLeft: '15%',
    marginTop: '100px',


}
export default About
*/