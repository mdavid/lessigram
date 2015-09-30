import React, {Component} from 'react';


/**
 *
 */
class ResetButton extends Component {


  /**
   *
   */
  render() {

    return (
      <div className="reset text-center">
        <button
          className="btn btn-lg btn-link"
          onClick={this.props.onReset}>
          <i className="fa fa-reply"></i>
          <span>Start Over</span>
        </button>
      </div>
    );

  }

}

export default ResetButton;
