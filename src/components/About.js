import React, { Component } from 'react'
class About extends Component {
    render() {
        return (
            <div style={paragraphStyle}>
                <h1>I'm currently a third year student studying computer science at San Jose State University</h1>
            </div>
        )
    }
}
const paragraphStyle = {
    backgroundColor: 'green',
    width: '60%',
    maxWidth: '1300px',
    marginLeft: '100px',
    marginTop: '100px',


}
export default About
