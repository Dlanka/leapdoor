import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { Block } from '../../components/ui'
import JobSeeker from '../../components/JobSeeker/JobSeeker';
import Profile from '../../components/JobSeeker/Profile/Profile';




export default class JobSeekerContainer extends Component {
  render() {
    return (
      <Block className="container">
        <Switch>
          <Route eaxct path={`${this.props.match.url}/profile/:id`} component={Profile} />
          <Route path="/" component={JobSeeker} />
        </Switch>
      </Block>
    )
  }
}
