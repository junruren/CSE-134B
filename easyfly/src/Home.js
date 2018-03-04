import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="dashboard-display">
        <div style={styles.hero}>
          <div style={styles.layer}>
            <h1 style={{fontSize: '3em'}}>EasyFly</h1>
            <h2>Airport pickup service made easy</h2>
          </div>
        </div>
        <div className="container">
          <div style={styles.highlights}>
            <div style={styles.feature}>
              <i className="fas fa-plane" style={styles.fas}></i>
              <p>Feature 1 text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div style={styles.feature}>
              <i className="fas fa-comment-alt" style={styles.fas}></i>
              <p>Feature 2 text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div style={styles.feature}>
              <i className="fas fa-car" style={styles.fas}></i>
              <p>Feature 3 text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
             <Link to="/driver/login"><button className="button" style={styles.button}>I am a driver</button></Link>
             <Link to="/rider/login"><button className="button" style={styles.button}>I am a rider</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  hero: {
    textAlign: 'center',
    width: '100%',
    height: '600px',
    background: "url('images/hero.jpg')",
    backgroundSize: 'cover',
    color: 'white'
  },
  layer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  highlights: {
    margin: '50px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  feature: {
    width: '25%',
    lineHeight: '1.5em',
    marginTop: '20px'
  },
  fas: {
    fontSize: '5em',
    width: '100%',
    textAlign: 'center',
    color: '#94C6CF'
  },
  button: {
    // fontSize: '1.3em',
    margin: '30px',
    width: '200px',
    height: '50px',
    borderRadius: '5px'
  }
}

export default Home;
