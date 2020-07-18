import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'
import { HashRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <div className="App" style={appStyle}>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home/>
          </React.Fragment>
        )}/>
        <Route exact path="/about" render={props => (
          <React.Fragment>
            <Header/>
            <About/>
          </React.Fragment>
        )}/>
        <Route exact path="/resume" render={props => (
          <React.Fragment>
            <Header/>
            <Resume/>
          </React.Fragment>
        )}/>
        <Route exact path="/projects" render={props => (
          <React.Fragment>
            <Header/>
            <Projects/>
          </React.Fragment>
        )}/>
      </div>
    </Router>
    
  );
}
const appStyle = {
  margin: '0',
  padding: '0',
}
export default App;
