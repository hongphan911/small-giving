import AuthForm,{ STATE_LOGIN} from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { Modal, ModalBody } from 'reactstrap';
import ProfileLayout from './components/Layout/ProfileLayout';
//import { Link } from 'react-router-dom';

const tintuc = React.lazy(() => import('pages/tintuc'));
const tintucthem = React.lazy(() => import('pages/tintucthem'));
const tintucsua = React.lazy(() => import('pages/tintucsua'));
const tintucxoa = React.lazy(() => import('pages/tintucxoa'));

const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));

const nhomnd = React.lazy(() => import('pages/nhomnd'));
const nhomndthem = React.lazy(() => import('pages/nhomndthem'));
const nhomndsua = React.lazy(() => import('pages/nhomndsua'));
const nhomndxoa = React.lazy(() => import('pages/nhomndxoa'));

const nd = React.lazy(() => import('pages/nd'));
const ndthem = React.lazy(() => import('pages/ndthem'));
const ndsua = React.lazy(() => import('pages/ndsua'));
const ndxoa = React.lazy(() => import('pages/ndxoa'));

const chuyentien = React.lazy(() => import('pages/chuyentien'));
const chuyentienthem = React.lazy(() => import('pages/chuyentienthem'));


const xemdk = React.lazy(() => import('pages/xemdk'));
const trangchu = React.lazy(() => import('pages/trangchu'));
const Phanquyen = React.lazy(() => import('pages/phanquyen'));
const ProfileUser = React.lazy(() => import('pages/ProfileUser'));

const khaosat = React.lazy(() => import('pages/khaosat'));
const khaosatthem = React.lazy(() => import('pages/khaosatthem'));
const khaosatsua = React.lazy(() => import('pages/khaosatsua'));
const khaosatxoa = React.lazy(() => import('pages/khaosatxoa'));

const diemdanh = React.lazy(() => import('pages/diemdanh'));
const diemdanhthem = React.lazy(() => import('pages/diemdanhthem'));
const diemdanhsua = React.lazy(() => import('pages/diemdanhsua'));
const diemdanhxoa = React.lazy(() => import('pages/diemdanhxoa'));

const hoatdong = React.lazy(() => import('pages/hoatdong'));
const hoatdongthem = React.lazy(() => import('pages/hoatdongthem'));
const hoatdongsua = React.lazy(() => import('pages/hoatdongsua'));
const hoatdongxoa = React.lazy(() => import('pages/hoatdongxoa'));

const naptien = React.lazy(() => import('pages/naptien'));
const naptienthem = React.lazy(() => import('pages/naptienthem'));

const gopy = React.lazy(() => import('pages/gopy'));

const bcquyengop = React.lazy(() => import('pages/bcquyengop'));
const bctaitro = React.lazy(() => import('pages/bctaitro'));
const bcnaptien = React.lazy(() => import('pages/bcnaptien'));


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  state = {
    showLogin: true,
    setLogin: true,
    authState: STATE_LOGIN,
    
  };
  handleLogin = () => {
    this.setState({
      showLogin: false,
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
                onLogin={this.handleLogin}
              />
            </ModalBody>
          </Modal>
      : <BrowserRouter basename={getBasename()}>
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
            

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>

                <Route exact path="/" component={trangchu} />
                <Route exact path="/phanquyen" component={Phanquyen} />
                <Route exact path="/login-modal" component={AuthModalPage} />

                <Route exact path="/nd" component={nd} />
                <Route exact path="/ndthem" component={ndthem} />
                <Route exact path="/ndsua" component={ndsua} />
                <Route exact path="/ndxoa" component={ndxoa} />

                <Route exact path="/chuyentien" component={chuyentien} />
                <Route exact path="/chuyentienthem" component={chuyentienthem} />

                <Route exact path="/tintuc" component={tintuc} />
                <Route exact path="/tintucthem" component={tintucthem} />
                <Route exact path="/tintucsua" component={tintucsua} />
                <Route exact path="/tintucxoa" component={tintucxoa} />

                <Route exact path="/bcnaptien" component={bcnaptien} />
                <Route exact path="/bcquyengop" component={bcquyengop} />
                <Route exact path="/bctaitro" component={bctaitro} />
                
                <Route exact path="/nhomnd" component={nhomnd}/>
                <Route exact path="/nhomndthem" component={nhomndthem}/>
                <Route exact path="/nhomndsua" component={nhomndsua}/>
                <Route exact path="/nhomndxoa" component={nhomndxoa}/>
              
                <Route exact path="/gopy" component={gopy} />

                <Route exact path="/naptien" component={naptien} />
                <Route exact path="/naptienthem" component={naptienthem} />

                <Route exact path="/khaosat" component={khaosat} />
                <Route exact path="/khaosatthem" component={khaosatthem} />
                <Route exact path="/khaosatsua" component={khaosatsua} />
                <Route exact path="/khaosatxoa" component={khaosatxoa} />

                <Route exact path="/diemdanh" component={diemdanh} />
                <Route exact path="/diemdanhthem" component={diemdanhthem} />
                <Route exact path="/diemdanhsua" component={diemdanhsua} />
                <Route exact path="/diemdanhxoa" component={diemdanhxoa} />

                <Route exact path="/hoatdong" component={hoatdong} />
                <Route exact path="/hoatdongthem" component={hoatdongthem} />
                <Route exact path="/hoatdongsua" component={hoatdongsua} />
                <Route exact path="/hoatdongxoa" component={hoatdongxoa} />

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