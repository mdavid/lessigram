import React, {Component} from 'react';


/**
 *
 */
class ImagePreview extends Component {


  /**
   *
   */
  render() {

    return (
      <div className="image-preview">
        <img
          id="image-preview"
          src={this.props.src}
          onError={this.props.onError}
        />
      </div>
    );

  }

}

export default ImagePreview;
