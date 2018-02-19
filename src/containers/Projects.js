import React, { Component } from 'react';
import { api } from 'api'
import Project from '../components/Project'
import ChangeView from '../components/ProjectView'
import { CreateProject } from '../components/ProjectButtons'
import { Container, Divider, Grid, Loader, Sticky } from 'semantic-ui-react'

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      loader: true,
      view: 1
    }
  }
  componentDidMount() {
    api.get(this, '/projects/')
  }
  render() {
    return (
      <div>
        <Container textAlign='left'>
          <h1>Projects</h1>
        </Container>
        <Container textAlign='right'>
          <ChangeView father={ this } lenght={ 2 } />
        </Container>
        <Divider />
        <Container textAlign='right'>
          <Sticky><CreateProject /></Sticky>
        </Container>
        <Grid columns='equal' stackable padded>
          { this.state.projects.map((project, i) => (
            <Project
              key={ i }
              view={this.state.view}
              id={ project._id.$oid }
              {...project.info}
            />
          )) }
        </Grid>
        <Loader active={this.state.loader} />
      </div>
    );
  }
}
