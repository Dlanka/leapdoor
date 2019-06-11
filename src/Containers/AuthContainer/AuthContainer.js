import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// import * as theme from '../../theme';
// import AuthGlobalState from '../../context/AuthGlobalState';

import { Block } from '../../components/ui';

import Login from '../../components/Auth/Login/Login';
import CreateAccount from '../../components/Auth/CreateAcccount/CreateAccount';
import Error from '../ErrorContainer/Error';

const AuthBlock = styled(Block)`
    margin-top:50px
`;

class AuthContainer extends Component {
  render() {

    return (
      <Block className="container">
        <AuthBlock row align="center" justify="center">
         
           
            <Switch>

              <Route exact path={`${this.props.match.url}/create`} component={CreateAccount} />
              <Route exact path={`${this.props.match.url}/login`} component={Login} />
              <Route component={Error} />

            </Switch>

         
        </AuthBlock>
      </Block>
    )
  }
}

export default AuthContainer;