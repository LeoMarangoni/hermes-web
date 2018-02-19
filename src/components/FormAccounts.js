import React, { Component } from 'react';
import {Button, Divider, Form, Input} from 'semantic-ui-react'
export class Accounts extends Component {
  constructor(props) {
    super(props)
    this.state = {accounts: this.props.state}
    console.log(this.state)
  };

  addDynamicItem = () => {
    const new_account = this.state.accounts.concat({'credentials':{'user1': "", 'user2': "", 'password1': "", 'password2': ""}})
    this.setState({accounts: new_account}, function() {
      this.props.action(this.state.accounts, 'accounts')
    });
  };

  removeDynamicItem = (id) => {
    this.setState({
      accounts: this.state.accounts.filter((_, i) => i !== id)
    }, function() {
      this.props.action(this.state.accounts, 'accounts')
    });
  };

  updateUserValue = (event, data) => {
    const accounts = [...this.state.accounts];
    accounts[data.account]['credentials'][data.name] = data.value;
    this.setState({ accounts }, function() {
      this.props.action(this.state.accounts, 'accounts')
    });
  };

  renderLine(id, account) {
    console.log()
    return(
        <Form.Group key={'accountline' + id} id={id}>
          <Form.Field
            account={ id }
            key={ 'u1.' + id }
            name="user1" width="4"
            control={Input} placeholder='From'
            value={ this.state.accounts[id].credentials.user1 }
            onChange={this.updateUserValue} />
           <Form.Field
             account={ id }
             key={ 'p1.' + id }
             name="password1"
             width="4"
             type='Password'
             control={Input}
             placeholder='Password'
             value={this.state.accounts[id].credentials.password1}
             onChange={this.updateUserValue}/>
           <Form.Field
             account={ id }
             key={ 'u2.' + id }
             name="user2" width="4"
             control={Input} placeholder='To'
             value={this.state.accounts[id].credentials.user2}
             onChange={this.updateUserValue} />
           <Form.Field
             account={ id }
             key={ 'p2.' + id }
             name="password2"
             width="4"
             type='Password'
             control={Input}
             placeholder='Password'
             value={this.state.accounts[id].credentials.password2}
             onChange={this.updateUserValue} />
           <Button
             attached='right'
             inverted
             icon
             color='red'
             onClick={() => this.removeDynamicItem(id)}>
             Remove
           </Button>
       </Form.Group>
    )
  }
  render() {
    return(
      <div>
        <h4>Accounts</h4>
        <Divider />
        {this.state.accounts.map(function(account, i) {
          return(
            this.renderLine(i, account)
          )
        }, this
        )}
        <Form.Group key='addbutton'>
          <Button
            attached=''
            inverted
            icon
            color='green'
            onClick={ () => this.addDynamicItem() } >
            Add
          </Button>
        </Form.Group>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
};
