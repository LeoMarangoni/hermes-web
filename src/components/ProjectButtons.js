import React, { Component } from 'react';
import { Button, Icon, Modal, Popup } from 'semantic-ui-react'
import FormProject  from '../containers/FormProject'

export class EditProject extends Component {
  render() {
    return (
      <Icon name='options' />
    );
  }
}

export class DeleteProject extends Component {
  render() {
    return (
      <Popup
        trigger={<Icon name='trash'></Icon>}
        content={
          <div>
            <h4>Confirm Exclusion?</h4>
            <p>This project will be permanently removed!</p>
            <p>{ this.props.project }</p>
            <Button onClick={ () => (console.log(this.props.project + " deleted")) } color='red' content='yes!' />
          </div>
        }
        on='click'
        position='top right'
      />
    );
  }
}

export class CreateProject extends Component {
  render() {
    return (
      <Modal trigger={
        <Icon.Group size='large'>
            <Icon name='file outline' />
            <Icon corner name='plus' />
        </Icon.Group>
      }>
        <Modal.Content><FormProject /></Modal.Content>
      </Modal>
    );
  }
}

export class PlayProject extends Component {
  render() {
    return (
      <Icon name='video play' />
    );
  }
}

export class StopProject extends Component {
  render() {
    return (
      <Icon name='stop circle' />
    );
  }
}
