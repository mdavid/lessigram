import React, {Component} from 'react';
import {getFacebookProfilePhoto} from '../services/facebook';


/**
 *
 */
class FacebookLoader extends Component {


  /**
   * @param  {[type]}
   * @return {[type]}
   */
  constructor(props: any) {

    super(props);

    // Self-bind event handlers and subcomponent callbacks.
    this.load = this.load.bind(this);
    this.handleLoad = this.handleLoad.bind(this);

  }


  /**
   *
   */
  render() {

    return (

      <button
        className="btn btn-lg btn-default"
        onClick={this.load}>
        <i className="fa fa-facebook"></i>
        <span>Facebook</span>
      </button>

    );

  }


  /**
   *
   */
  load() {

    getFacebookProfilePhoto(this.handleLoad);

  }

  /**
   * @return {[type]}
   */
  handleLoad(error, src) {

    if (error) {
      return this.props.onError(error);
    }

    this.props.onSet(src);

  }

}

export default FacebookLoader;
