import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import dashboard from './features/dashboard';
import login from './features/login';
import usersPosts from './features/usersPosts';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="border" variant="success" />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={login} />
            <Route path="/statistics" component={dashboard} />
            <Route path="/posts" component={usersPosts} />
            <Redirect from="*" to={"/"} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
