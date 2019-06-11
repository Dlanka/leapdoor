import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout'

import JobContainer from './Containers/JobContainer/JobContainer';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import JobSeekerContainer from './Containers/JobSeekerContainer/JobSeekerContainer';
import Error from './Containers/ErrorContainer/Error';
import GlobalState from './context/GlobalState';
import AuthGlobalState from './context/AuthGlobalState';


function App() {
  return (
    <BrowserRouter>
      <GlobalState>
        <AuthGlobalState>
          <Layout>
            <Switch>
              <Route exact path="/job" component={JobContainer} />
              <Route path="/auth" component={AuthContainer} />
              <Route path="/jobseeker" component={JobSeekerContainer} />
              <Route component={Error} />
              <Redirect path="/" to="/job" />
            </Switch>
          </Layout>
        </AuthGlobalState>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;
