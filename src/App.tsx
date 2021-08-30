import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import login from './features/login';

const Dashboard = React.lazy(() => import('./features/dashboard'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading ...</p>}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/statistics" component={Dashboard} />
          <Redirect from="*" to={"/"} />
        </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
