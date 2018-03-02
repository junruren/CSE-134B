import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './css/index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="layer">
            <h1>EasyFly</h1>
            <h2>Airport pickup service made easy</h2>
          </div>
        </div>
        <div className="container">
          <div className="highlights">
            <div className="feature">
              <i className="fas fa-plane"></i>
              <p>Feature 1 text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="feature">
              <i className="fas fa-comment-alt"></i>
              <p>Feature 2 text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="feature">
              <i className="fas fa-car"></i>
              <p>Feature 3 text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="onboard-buttons">
             <Link to="/driver/login"><button className="button">I am a driver</button></Link>
             <Link to="/rider/login"><button className="button">I am a rider</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
