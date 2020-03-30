import logo200Image from 'assets/img/logo/Anh cut.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class AuthForm extends React.Component {
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
          <Input {...usernameInputProps} />
        </FormGroup>

        )}
        
        {this.isSignup && (
          <FormGroup>
          <Label for={emailLabel}>{emailLabel}</Label>
          <Input {...emailInputProps} />
        </FormGroup>
          
        )}
        {this.isSignup && (
          <FormGroup>
          <Label for={phoneLabel}>{phoneLabel}</Label>
          <Input {...phoneInputProps} />
        </FormGroup>

        )}
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
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
