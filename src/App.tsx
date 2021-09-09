import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import dashboard from './features/dashboard';
import login from './features/login';
import usersPosts from './features/usersPosts';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="border" variant="success" />}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/login" component={login} />
            <PrivateRoute path="/statistics" component={dashboard} />
            <PrivateRoute path="/posts" component={usersPosts} />
            <Redirect from="*" to={"/login"} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

const PrivateRoute = ({ component, ...rest }: any) => {
  const token = localStorage.getItem("token")
  // check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const routeComponent = (props: any) =>
    token ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/login" />
    )
  return <Route {...rest} render={routeComponent} />
}


export default App;
