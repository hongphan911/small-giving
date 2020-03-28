import AuthForm,{ STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React, { Component } from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { Button, Modal, ModalBody } from 'reactstrap';
import ProfileLayout from './components/Layout/ProfileLayout';

const tinhd = React.lazy(() => import('pages/tinhd'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const chuyentien = React.lazy(() => import('pages/chuyentien'));
const nhomnd = React.lazy(() => import('pages/nhomnd'));
const nd = React.lazy(() => import('pages/nd'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const xemdk = React.lazy(() => import('pages/xemdk'));
const trangchu = React.lazy(() => import('pages/trangchu'));
const bcquyengop = React.lazy(() => import('pages/bcquyengop'));
const khaosat = React.lazy(() => import('pages/khaosat'));
const diemdanh = React.lazy(() => import('pages/diemdanh'));
const danhsachhd = React.lazy(() => import('pages/danhsachhd'));
const naptien = React.lazy(() => import('pages/naptien'));
const gopy = React.lazy(() => import('pages/gopy'));
const bcnaptien = React.lazy(() => import('pages/bcnaptien'));
const Phanquyen = React.lazy(() => import('pages/phanquyen'));
const bctaitro = React.lazy(() => import('pages/bctaitro'));
const ProfileUser = React.lazy(() => import('pages/ProfileUser'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  state = {
    showLogin: false,
    setLogin: false,
    authState: STATE_LOGIN,
    
  };
  handleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin,
    });
  };

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };
  render() {
    return (      
      <div>
          {this.state.showLogin === true
          ? <Modal
            isOpen={this.state.showLogin}
            toggle={this.handleLogin}
            size="sm"
            backdrop="static"
            backdropClassName="modal-backdrop-light"
            // external={externalCloseBtn}
            centered>
            <ModalBody>
              <AuthForm
                authState={this.state.authState}
                onChangeAuthState={this.handleAuthState}
                onLogin={() => {
                  this.setState({ showLogin: false })}}
              />
            </ModalBody>
          </Modal>
      :<BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={trangchu} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/nd" component={nd} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/bctaitro" component={bctaitro} />
                <Route exact path="/tinhd" component={tinhd} />
                <Route exact path="/bcnaptien" component={bcnaptien} />
                <Route exact path="/phanquyen" component={Phanquyen} />
                <Route exact path="/chuyentien" component={chuyentien} />
                <Route exact path="/nhomnd" component={nhomnd}/>
                <Route exact path="/bcquyengop" component={bcquyengop} />
                <Route exact path="/gopy" component={gopy} />
                <Route exact path="/naptien" component={naptien} />
                <Route exact path="/khaosat" component={khaosat} />
                <Route exact path="/diemdanh" component={diemdanh} />
                <Route exact path="/danhsachhd" component={danhsachhd} />
                <Route exact path="/xemdk" component={xemdk} />
              </React.Suspense>
            </MainLayout>
            <ProfileLayout>
                  <Route exact path="/profile" component={ProfileUser}/>
                </ProfileLayout>
            <Redirect to="/" />

          </Switch>
        </GAListener>
      </BrowserRouter>
    }
  </div>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
