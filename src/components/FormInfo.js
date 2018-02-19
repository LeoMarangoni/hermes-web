import React, { Component } from 'react';
import { Divider, Form, Input, Select} from 'semantic-ui-react';

//Esse cara não pode e nem deve ser controlado através de seu próprio state
//devo alterar o state diretamente no PAI e passa-lo como um prop aqui
export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state
    console.log(this.state)
  }
  updateValue = (event, data) => {
    this.setState({
      [data.name]: data.value
    }, function() {
      this.props.action(this.state, 'info')
    });
  };
  render(){
    const protocols = [
      {key: 'p1', text: 'Imap', value: 'imap'},
      {key: 'p2', text: 'Zimbra', value: 'zimbra'},
      {key: 'p3', text: 'Exchange', value: 'exchange', disabled: true}
    ]
    const threads = Array.apply(null, {length: 5}).map(Function.call, (i)=>(
      {key: 'p' + (i+1), text: "" + (i+1), value: "" + (i+1)}
    ))

    return(
      <div>
        <h4>Project Info</h4>
        <Divider />
        <Form.Group>
          <Form.Field
            required
            name="name"
            control={Input}
            label='Name'
            placeholder='Project name'
            value={this.state.name}
            onChange={this.updateValue}
          />
          <Form.Field
            required
            name="protocol"
            control={ Select }
            label='Protocol'
            options={ protocols }
            placeholder='Protocol'
            value={this.state.protocol}
            onChange={this.updateValue}
          />
          <Form.Field
            name="threads"
            control={ Select }
            label='Threads'
            options={ threads }
            value={this.state.threads}
            onChange={this.updateValue}
          />
        </Form.Group>
        <br></br>
      </div>
    )
  }
}
