import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get_date from '../utils/MongoTime';
import { DeleteProject, EditProject, PlayProject, StopProject } from './ProjectButtons'
import { Grid, Popup, Table } from 'semantic-ui-react'


export default class Project extends Component {
  parseDate(){
    let date = get_date(this.props.id)
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    return (date)
  }
  ViewInGrid() {
    return(
      <div>
          <Grid.Column key={ this.props.id }>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    {this.props.name}
                  </Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell><EditProject project={ this.props.id } /></Table.HeaderCell>
                  <Table.HeaderCell><DeleteProject project={ this.props.id } /></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                { Object.keys(this.props).map(
                  (key, i) => {
                    if (key !== 'name' && key !== 'id' && key !== 'view')
                      return(
                        <Table.Row key={ key + this.props.id }>
                          <Table.Cell>{ key + ": "}</Table.Cell>
                          <Table.Cell>{ this.props[key]}</Table.Cell>
                        </Table.Row>
                      )
                    return false
                  }
                ) }
                <Table.Row>
                  <Table.Cell>Created: </Table.Cell>
                  <Table.Cell>{ this.parseDate() }</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </Grid.Column>
      </div>
    )
  }
  ViewInLines(){
    return(
        <Grid.Row>
          <Grid.Column><b>{this.props.name}</b></Grid.Column>
          { Object.keys(this.props).map(
            (key, i) => {
              if (key !== 'name' && key !== 'id' && key !== 'view')
                return(
                    <Popup key={ key + this.props.id }
                      trigger={ <Grid.Column>{ this.props[key] }</Grid.Column> }
                      content={key}
                    />
                )
              return false
            }
          ) }
          <Grid.Column>{ this.parseDate() }</Grid.Column>
          <Grid.Column>
            <EditProject project={ this.props.id } />
            <DeleteProject project={ this.props.id } />
            <PlayProject project={ this.props.id } />
            <StopProject project={ this.props.id } />
          </Grid.Column>
        </Grid.Row>
    )
  }
  views(view){
    switch(view) {
      case 1:
        return(
          this.ViewInGrid()
        );
      case 2:
        return(
          this.ViewInLines()
        );
      default:
        return(
          this.ViewInGrid()
        )
    }
  }
  render() {
    return (
      this.views(this.props.view)
    );
  }
}

Project.propTypes = {
  name: PropTypes.string,
  view: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

Project.defaultProps = {
  name: 'UnNamed',
  view: 1
};
