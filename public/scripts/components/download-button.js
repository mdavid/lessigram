import React, {Component} from 'react';

class DownloadButton extends Component {

  render() {

    return (
      <a
        className="btn btn-lg btn-link"
        href={this.props.src}
        download>
        <i className="fa fa-download"></i>
        <span>Download</span>
      </a>
    );

  }

}

export default DownloadButton;
