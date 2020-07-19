import React, { Component } from 'react'
class About extends Component {
    render() {
        return (
            <div style={paragraphStyle}>
                <h1>I'm  a third year student studying computer science at San Jose State University</h1>
                <h1>In my spare time I like playing badminton and drinking boba with friends</h1>
            </div>
        )
    }
}
const paragraphStyle = {
    backgroundColor: 'white',
    width: '100%',
    marginLeft: '15%',
    marginTop: '100px',


}
export default About
