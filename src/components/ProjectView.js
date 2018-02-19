import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

class ChangeView extends Component {
  toLeft(that){
    if (that.state.view <= 1){
      that.setState({view: this.props.lenght});
    }
    else {
      that.setState({view: that.state.view - 1});
    }

  }
  toRight(that){
    if (that.state.view >= this.props.lenght) {
      that.setState({view: 1});
    }
    else {
      that.setState({view: that.state.view + 1});
    }
  }
  render() {
    return (
      <div>
        <Icon disabled onClick={() => this.toLeft(this.props.father)} name='chevron left' />
        <Icon disabled name='eye'/>
        <Icon disabled onClick={() => this.toRight(this.props.father)} name='chevron right' />
      </div>

    );
  }
}

export default ChangeView;
