import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'


export default class AppHeader extends Component {
  render() {
    return (
      <Segment size='massive'>
        <Header as='h1' textAlign='center'>
          Hermes WebApp
        </Header>
    </Segment>
    );
  }
}
