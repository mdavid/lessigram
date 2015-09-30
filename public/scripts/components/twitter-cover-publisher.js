import React, {Component} from 'react';
import DownloadButton from './download-button';

class TwitterCoverPublisher extends Component {

  constructor(props: any) {

    super(props);

    this.publish = this.publish.bind(this);

  }

  render() {

    return (
      <div className="publisher twitter-cover-publisher text-center">
        <ul className="list-inline">
          <li><DownloadButton src={this.props.src} /></li>
          <li>
            <button
              className="btn btn-lg btn-default btn-twitter"
              onClick={this.publish}>
              <i className="fa fa-picture-o"></i>
              <span>Set Twitter Cover</span>
            </button>
          </li>
        </ul>
      </div>
    );

  }

  publish() {
    console.log('TwitterCoverPublisher:publish', this.props.src);
  }
}

export default TwitterCoverPublisher;
