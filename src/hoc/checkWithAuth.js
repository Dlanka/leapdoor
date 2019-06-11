import React, { Component } from 'react';

import AuthContext from '../context/AuthContext';

const checkWithAuth = (Wrapper, redirectTo) => {

  return class extends Component {

    static contextType = AuthContext;

    componentDidMount() {
      this.context.onCheckAuth();
    }

    render() {
      
      if (!this.context.isAuth) {
        this.props.history.push(redirectTo ? redirectTo : '/job');
      }

      return (
        <Wrapper {...this.props} />
      )
    }
  }

}

export default checkWithAuth;