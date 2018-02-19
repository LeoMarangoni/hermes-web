import React, { Component } from 'react';
import AppHeader from '../components/AppHeader'
import Projects from './Projects'
import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Container>
          <br></br>
          <Projects />
        </Container>

      </div>
    );
  }
}

export default App;
