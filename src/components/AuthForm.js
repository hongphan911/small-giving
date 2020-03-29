import logo200Image from 'assets/img/logo/Anh cut.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const initialState ={
  email:"",
  phone:"",
  username:"",
  password:"",
  repassword:"",
  emailError:"",
  phoneError:"",
  usernameError:"",
  passwordError:"",
  repasswordError:"",
  
};

class AuthForm extends React.Component {
  state= initialState;
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value
    });
  };
  validate = () => {
    let emailError = "";
    let phoneError = "";
    let usernameError = "";
    let passwordError = "";
    let repasswordError = "";


    if (!this.state.email) {
      emailError ="Không được bỏ chống!";
    }
    if (!this.state.phone) {
      phoneError ="Không được bỏ chống!";
    }
    if (!this.state.username){
      usernameError ="Không được bỏ chống!";
    }
    if (!this.state.password){
      passwordError ="Không được bỏ chống!";
    }
    if (!this.state.repassword){
      repasswordError ="Không được bỏ chống!";
    }
    if (emailError || phoneError || passwordError|| repasswordError){
      this.setState({ emailError, phoneError, passwordError, repasswordError});
      return false;
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
      this.setState(initialState);
    }
  };

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  //handleSubmit = event => {
  //event.preventDefault();
  //};

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Đăng nhập';
    }

    if (!buttonText && this.isSignup) {
      return 'Đăng kí';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      onLogin,
      usernameLabel,
      usernameInputProps,
      phoneLabel,
      phoneInputProps,
      emailLabel,
      emailInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        {this.isLogin && (
          <FormGroup>
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

        )}
        
        {this.isSignup && (
          <FormGroup>
          <Label for={emailLabel}>{emailLabel}</Label>
          <div className="error-text">
                  {this.state.emailError} 
                </div> 
          <Input {...emailInputProps} 
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
        </FormGroup>
          
        )}
        {this.isSignup && (
          <FormGroup>
          <Label for={phoneLabel}>{phoneLabel}</Label>
          <div className="error-text">
                  {this.state.phoneError} 
                </div> 
          <Input {...phoneInputProps} 
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          />
        </FormGroup>

        )}
        <FormGroup>
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
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <div className="error-text">
                  {this.state.repasswordError} 
                </div> 
            <Input {...confirmPasswordInputProps}
            name="repassword"
            value={this.state.repassword}
            onChange={this.handleChange}
             />
          </FormGroup>
        )}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Đồng ý với chính sách bảo mật' : 'Nhớ mật khẩu'}
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={() =>
            onLogin()}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>Hoặc</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Đăng nhập
              </a>
            ) : (
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Đăng kí
              </a>
            )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
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
  emailLabel: 'Email',
  emailInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
    
    
  },
  phoneLabel: 'Số điện thoại',
  phoneInputProps: {
    type: 'text',
    placeholder: 'Nhập số điện thoại',
    
    
  },
  usernameLabel: 'Email hoặc SĐT',
  usernameInputProps: {
    type: 'email',
    placeholder: 'Email hoặc SĐT',
    
    
  },
  passwordLabel: 'Mật khẩu',
  passwordInputProps: {
    type: 'password',
    placeholder: 'Mật khẩu',
    
    
  },
  confirmPasswordLabel: 'Nhập lại mật khẩu',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'Nhập lại mật khẩu',
    
    
  },
  onLogoClick: () => {},
};

export default AuthForm;
