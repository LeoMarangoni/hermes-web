import React, { Component } from 'react';
import { Checkbox, Divider, Form, Input, Select} from 'semantic-ui-react';

export class Configs extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state
  }
  updateValue = (event, data) => {
    this.setState({
      [data.name]: data.value
    }, function() {
      this.props.action(this.state, 'configs')
    });
  };

  renderHost(isDestination) {
    let host = 'Source'
    let n = 1

    if (isDestination === true) {
      host = 'Destination'
      n = 2
    }

    const encrypt = [
      {key: '1', text: 'AUTO', value: ' '},
      {key: '2', text: 'SSL', value: 'ssl' + n},
      {key: '3', text: 'TLS', value: 'tls' + n}
    ]
    const authmech = [
      {key: '1', text: 'AUTO', value: ' '},
      {key: '2', text: 'PLAIN', value: 'PLAIN'},
      {key: '3', text: 'LOGIN', value: 'LOGIN'}    ]

    return(
      <div>
        <Form.Group>
          <Form.Field
            required
            name={ 'host' + n }
            width="8"
            control={Input}
            label={ host }
            placeholder={ host + ' server'}
            value={ this.state.name }
            onChange={ this.updateValue }
          />
          <Form.Field
            name={ "_encrypt" + n }
            defaultValue=" "
            control={Select}
            label='Encrypt'
            options={ encrypt }
            value={this.state.name}
            onChange={this.updateValue}
          />
          <Form.Field
            name={ "authmech" + n }
            defaultValue=" "
            control={Select}
            label='Mechanism'
            options={ authmech }
            value={this.state.name}
            onChange={this.updateValue}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field key={'check' + n} control={Checkbox} onClick={ () => {
            var new_state = this.state.__admindisabled
            new_state[n -1] = !new_state[n - 1]
            this.setState({
              __admindisabled: new_state
            })
            //this.state.__admindisabled[n - 1] = !this.state.__admindisabled[n - 1]
            //this.forceUpdate()
          }
        }
          />
          <Form.Field
            name={ 'authuser' + n }
            width="8"
            control={Input}
            label='Delegated Admin'
            placeholder='Delegated Admin Account'
            disabled={ this.state.__admindisabled[n - 1] }
            value={this.state.name}
            onChange={this.updateValue}
          />
          <Form.Field
            key={ 'authpassword.' + n }
            name={ "password" + n }
            width="4"
            label="Admin Password"
            type='Password'
            control={Input}
            placeholder='Password'
            disabled={ this.state.__admindisabled[n - 1] }
            value={this.state.name}
            onChange={this.updateValue}
          />
        </Form.Group>
      </div>
  )
  }
  render(){
    return(
      <div>
        <h4>Server Configuration</h4>
        <Divider />
          { this.renderHost(false) }
          { this.renderHost(true) }
        <br></br>
      </div>
    )
  }
}
