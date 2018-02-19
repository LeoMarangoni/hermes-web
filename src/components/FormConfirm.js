import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { api } from 'api'
import { Button, Form, Icon} from 'semantic-ui-react';

export class Confirmation extends Component {
  constructor() {
    super();
    this.send = {
      "post": () => api.post(this.props.url, this.props.data),
      "put": () => api.put(this.props.url, this.props.data),
    }
  }
  render() {
    return(
      <Form.Group>
        <Button icon onClick={() => this.send[this.props.action]()}>
          <Icon name='send' />
        </Button>
        <Button icon>
          <Icon name='cancel' />
        </Button>
      </Form.Group>
    )

  }
}

Confirmation.propTypes = {
  data: PropTypes.object,
  action: PropTypes.string,
  url: PropTypes.string,
};
