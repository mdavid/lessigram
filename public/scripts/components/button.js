import React, {Component} from 'react';

class Button extends Component {

  render() {

    return (
      <button
        className="btn btn-lg btn-default"
        onClick={() => this.props.onSet(this.props.value) }>
        <i className={this.props.icon}></i>
        <span>{this.props.text}</span>
      </button>
    );

  }

}

export default Button;
