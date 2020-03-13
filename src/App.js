import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const tinhd = React.lazy(() => import('pages/tinhd'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const chuyentien = React.lazy(() => import('pages/chuyentien'));
const nhomnd = React.lazy(() => import('pages/nhomnd'));
const nd = React.lazy(() => import('pages/nd'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const trangchu = React.lazy(() => import('pages/trangchu'));
const bcquyengop = React.lazy(() => import('pages/bcquyengop'));
const khaosat = React.lazy(() => import('pages/khaosat'));
const danhsachhd = React.lazy(() => import('pages/danhsachhd'));
const naptien = React.lazy(() => import('pages/naptien'));
const gopy = React.lazy(() => import('pages/gopy'));
const bcnaptien = React.lazy(() => import('pages/bcnaptien'));
const Phanquyen = React.lazy(() => import('pages/phanquyen'));
const bctaitro = React.lazy(() => import('pages/bctaitro'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
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
                <Route exact path="/danhsachhd" component={danhsachhd} />
                <Route exact path="/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
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
