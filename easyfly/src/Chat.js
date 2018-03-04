import React from 'react';
import { Link } from 'react-router-dom';

import './css/chat.css';

const Chat = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <nav style={styles.nav}>
        <div style={styles.divWidth}>
          <Link to="/" style={{fontSize: '1.4em', textDecoration: 'none', color: '#1F7DC1'}}><i className="fas fa-chevron-left"></i> Back</Link>
        </div>
        <div style={styles.divWidth}>
          <p style={styles.personName}>John</p>
        </div>
        <div style={styles.divWidth}></div>
      </nav>
      <hr style={{marginLeft: '0', marginRight: '0'}}/>
      <div style={styles.messages}></div>
      <footer style={styles.footer}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <input type="text" placeholder="Enter message here..." id="messageInput" style={{...styles.borderRadius, ...styles.chatControlElements, width: '78%', border: '1px solid #252525', height: '40px', padding: '5px'}}/>
          <button className="button" id='sendButton' style={{...styles.borderRadius, ...styles.chatControlElements, width: '18%', height: '40px'}}>Send</button>
        </div>
        <button className="button" style={{...styles.borderRadius, ...styles.footerButton}}>Confirm Deal from My Side</button>
      </footer>
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '15px 0'
  },
  personName: {
    margin: '0',
    fontSize: '2em',
    textAlign: 'center'
  },
  divWidth: {
    width: '30%'
  },
  footer: {
    marginTop: 'auto',
    marginBottom: '0',
    width: '100%'
  },
  footerButton: {
    width: '25%',
    height: '40px',
    display: 'block',
    margin: '20px auto',
    fontSize: '1em'
  },
  messages: {
    margin: '40px 0',
    minHeight: '65vh'
  },
  messageDiv: {
    border: '1px solid #252525',
    borderRadius: '10px',
    width: '55%',
    maxWidth: '550px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  messageP: {
    padding: '10px',
    margin: '0',
    lineHeight: '1.3em'
  },
  othersMessage: {
    marginLeft: '10px',
    marginRight: 'auto'
  },
  myMessage: {
    marginLeft: 'auto',
    marginRight: '10px',
    textAlign: 'right'
  },
  borderRadius: {
    borderRadius: '5px'
  },
  chatControlElements: {
    fontSize: '1.2em',
    boxSizing: 'border-box'
  }
}

export default Chat;
