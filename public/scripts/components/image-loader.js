import React, {Component} from 'react';
import FileLoader from './file-loader';
import WebLoader from './web-loader';
import FacebookLoader from './facebook-loader';


/**
 *
 */
class ImageLoader extends Component {


  /**
   *
   */
  constructor(props: any) {

    super(props);

    this.handleSet = this.handleSet.bind(this);
    this.handleError = this.handleError.bind(this);

  }


  /**
   *
   */
  render() {

    return (
      <div className="image-loader text-center">
        <p>Choose a source for your image:</p>
        <ul className="list-inline">
          <li><FileLoader onSet={this.handleSet} onError={this.handleError} /></li>
          <li><WebLoader onSet={this.handleSet} onError={this.handleError} /></li>
          <li><FacebookLoader onSet={this.handleSet} onError={this.handleError} /></li>
        </ul>
      </div>
    );

  }


  /**
   *
   */
  handleSet(src) {

    this.props.onSet(src);

  }

  /**
   * TODO improve error handling thruout app.
   */
  handleError(error) {

    alert(error)

  }

}

export default ImageLoader;



