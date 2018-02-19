import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Info } from '../components/FormInfo'
import { Configs } from '../components/FormConfigs'
import { Accounts } from '../components/FormAccounts'
import { Confirmation } from '../components/FormConfirm'
import { Container, Divider, Form, Header } from 'semantic-ui-react'

export default class FormProject extends Component {
  constructor() {
    super();
    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    this.state = {
      info: {},
      configs: [],
      accounts: [],
    };
  }
  handler(state, child) {
    this.setState({[child]: state})
  }
  componentWillMount() {
    this.setState(
      {
        info: this.props.info,
        configs: this.props.configs,
        accounts: this.props.accounts,
      }
    )
  }
  render(){
    return(
      <div>
        <Form>
          { this.props.header }
          <Divider />
          <Container>
            <Info action={this.handler} state={ this.state.info }/>
            <Configs action={this.handler} state={ this.state.configs } />
            <Accounts action={this.handler} state={ this.state.accounts } />
            <Confirmation data={this.state} action="post" url="/projects/" />
          </Container>
        </Form>
      </div>
    )
  }
};

FormProject.propTypes = {
  header: PropTypes.node,
  projectid: PropTypes.string,
  info: PropTypes.object,
  configs: PropTypes.object,
  accounts: PropTypes.array,
};

FormProject.defaultProps = {
  header: <Header icon='plus square outline' content='Create Project' />,
  projectid: null,
  info: {name: '', protocol:'', threads: '1'},
  configs: {
    __admindisabled: [true, true]
  },
  accounts: [
    {credentials: {user1: "", user2: "", password1: "", password2: ""}}
  ],
};
