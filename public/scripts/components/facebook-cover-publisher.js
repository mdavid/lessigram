import React, {Component} from 'react';
import DownloadButton from './download-button';
import {setFacebookCover} from '../services/facebook'

class FacebookCoverPublisher extends Component {

  render() {

    return (
      <div className="publisher facebook-cover-publisher text-center">
        <ul className="list-inline">
          <li><DownloadButton src={this.props.src} /></li>
          <li>
            <button
              className="btn btn-lg btn-default btn-facebook"
              onClick={this.setFacebookCover.bind(this)}>
              <i className="fa fa-picture-o"></i>
              <span>Set Facebook Cover</span>
            </button>
          </li>
        </ul>
      </div>
    );

  }

  setFacebookCover() {

    setFacebookCover(this.props.src, function(error, url) {

      if (error) {
        return console.error(error);
      }

      window.open(url);

    });

  }
}

export default FacebookCoverPublisher;
