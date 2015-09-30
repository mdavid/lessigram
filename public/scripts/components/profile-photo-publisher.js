import React, {Component} from 'react';
import DownloadButton from './download-button';
import {setFacebookProfilePhoto} from '../services/facebook'

class ProfilePhotoPublisher extends Component {

  render() {

    return (
      <div className="publisher profile-photo-publisher text-center">
        <ul className="list-inline">
          <li><DownloadButton src={this.props.src} /></li>
          <li>
            <button
              className="btn btn-lg btn-default btn-facebook"
              onClick={this.setFacebookProfilePhoto.bind(this)}>
              <i className="fa fa-facebook"></i>
              <span>Set Facebook Profile Photo</span>
            </button>
          </li>
          <li>
            <button
              className="btn btn-lg btn-default btn-twitter"
              onClick={this.setTwitterProfilePhoto.bind(this)}>
              <i className="fa fa-twitter"></i>
              <span>Set Twitter Profile Photo</span>
            </button>
          </li>
        </ul>
      </div>
    );

  }

  setFacebookProfilePhoto() {

    setFacebookProfilePhoto(this.props.src, function(error, url) {

      if (error) {
        return console.error(error);
      }

      window.open(url);

    });

  }

  setTwitterProfilePhoto() {

  }
}

export default ProfilePhotoPublisher;
