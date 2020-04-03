import logo200Image from 'assets/img/logo/Anh cut.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CardContent } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';



class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      usernameError:"",
      passwordError:"",
    };
  }
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value
    });
  };
  validate = () => {

    let usernameError = "";
    let passwordError = "";

    if (!this.state.username){
      usernameError ="Không được bỏ chống!";
    }
    if (!this.state.password){
      passwordError ="Không được bỏ chống!";
    }
    if (usernameError || passwordError ){
      this.setState({ usernameError, passwordError});
      return false;
    }
    return true;

  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      //this.setState(initialState);
    }
  };

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  /*get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }*/

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };
  handleLogin () {
    let config = {
      body: JSON.stringify({
        Email: this.state.email,
        MatKhau: this.state.password
      })
    }
    fetch('https://misappmobile.000webhostapp.com/Dangnhap/dangnhap.php', config)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            data: data,
          }, () => console.log('kiemtradulieu', this.state.data),
        );
      });
    };

  //handleSubmit = event => {
  //event.preventDefault();
  //};

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Đăng nhập';
    }

    /*if (!buttonText && this.isSignup) {
      return 'Đăng kí';
    }*/

    return buttonText;
  }

  render() {
    const {
      showLogo,
  
      usernameLabel,
      usernameInputProps,    
      passwordLabel,
      passwordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
            <span className="title-logo">Small Giving</span>
          </div>
        )}
        
          <FormGroup className="mg-0">
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <div className="error-text">
                  {this.state.usernameError} 
                </div> 
          <Input {...usernameInputProps} 
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          />
        </FormGroup>

        
        
        <FormGroup >
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <div className="error-text">
                  {this.state.passwordError} 
                </div> 
          <Input {...passwordInputProps} 
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          />
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{'Nhớ mật khẩu'}
          </Label>
        </FormGroup>
        <hr />                      
              <div className="bt-submit">               
                <Button type="submit" onClick={this.props.onLogin}>Đăng nhập</Button>               
              </div>
              <div className="forgot-password">
                <a href="/">
                  Quên mật khẩu?
                </a>
              </div>
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'Đăng nhập',
  showLogo: true,
  
  
  usernameInputProps: {
    type: 'email',
    placeholder: 'Email hoặc SĐT',
    
    
  },
  
  passwordInputProps: {
    type: 'password',
    placeholder: 'Mật khẩu',   
    
  },
  
  onLogoClick: () => {},
};

export default AuthForm;
