import React from 'react';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      displayErrorMsg: false,
      disableSaveButton: false
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleConfirmPasswordChange(event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  handleValidation(event) {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        displayErrorMsg: true,
        disableSaveButton: true
      });
    } else {
      this.setState({
        displayErrorMsg: false,
        disableSaveButton: false
      });
    }
  }

  render() {
    return (
      <div style={styles.background}>
        <div style={{...styles.verticalMiddle, paddingLeft: '30px', paddingRight: '30px'}}>
          <h1 style={styles.h1}>Settings</h1>
          <h2 style={styles.h2}>Personal Information - Reset Password</h2>
          <div className="personal-info" style={styles.flex}>
            <div style={{marginTop: '50px', width: '100%'}}>
              <div className="current-password" style={{...styles.flex, ...styles.subFlex, ...styles.divSize}}>
                <label style={styles.label}>Current Password:</label>
                <input style={styles.innerSize} type="password" name="current-password" required />
              </div>
              <div className="new-password" style={{...styles.flex, ...styles.subFlex, ...styles.divSize}}>
                <label style={styles.label}>New Password:</label>
                <input style={styles.innerSize} onChange={this.handlePasswordChange} type="password" name="new-password" required />
              </div>
              <div className="password-strength" style={{...styles.flex, ...styles.subFlex, ...styles.divSize}}>
                <label style={styles.label}>Strength:</label>
                <div className="strength-indicator" style={{...styles.innerSize, ...styles.strengthSuccess}}></div>
              </div>
              <div className="confirm-password" style={{...styles.flex, ...styles.subFlex, ...styles.divSize}}>
                <label style={styles.label}>Confirm Password:</label>
                <input style={styles.innerSize} onChange={this.handleConfirmPasswordChange} onKeyUp={this.handleValidation} type="password" name="confirm-password" required />
              </div>
              <div style={{...styles.flex, ...styles.subFlex, ...styles.divSize}}>
                {this.state.displayErrorMsg ? (<p id="error-msg" style={{color: 'red'}}>The passwords do not match!</p>) : <div></div>}
              </div>
            </div>
            <div className="setting-buttons" style={styles.settingButtons}>
              <button className="button" disable={this.state.disableSaveButton.toString()} style={styles.button}>Save</button>
              <button className="button" style={styles.button}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ResetPassword;

const styles = {
  h1: {
    fontSize: '400%',
    fontWeight: '700', /* This corresponds to "Bold" */
    textAlign: 'left',
    color: 'white',
    lineHeight: '1.45'
  },
  h2: {
    fontSize: '200%',
    fontWeight: '600', /* This corresponds to "Semi Bold" */
    textAlign: 'left',
    color: 'white',
    lineHeight: '1'
  },
  label: {
    color: 'white'
  },
  background: {
    backgroundColor: '#252525',
    minHeight: '100vh'
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  subFlex: {
    justifyContent: 'space-between'
  },
  innerSize: {
    padding: '0',
    margin: '0',
    width: '200px',
    height: '20px',
    boxSizing: 'border-box'
  },
  divSize: {
    margin: '30px 0',
    width: '60%'
  },
  strengthIndicator: {
    height: '20px'
  },
  strengthDanger: {
    background: '#d00'
  },
  strengthWarning: {
    background: '#f50'
  },
  strengthSuccess: {
    background: '#080'
  },
  settingButtons: {
    margin: '2.5%',
    marginLeft: 'auto',
    marginRight: '0'
  },
  button: {
    margin: '20px',
    width: '100px',
    height: '50px',
    fontSize: '16px'
  },
  verticalMiddle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}
