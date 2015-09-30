import React, {Component} from 'react';
import ImageLoader from '../components/image-loader';
import ImagePreview from '../components/image-preview';
import ImageEditor from '../components/editor';
import ResetButton from '../components/reset-button';
import ProfilePhotoPublisher from '../components/profile-photo-publisher';
import FacebookCoverPublisher from '../components/facebook-cover-publisher';
import TwitterCoverPublisher from '../components/twitter-cover-publisher';


/**
 * API key for Adobe Creative SDK
 * @see https://creativesdk.adobe.com/myapps.html
 * @type {String}
 */
const CREATIVE_SDK_API_KEY = 'b60edec880d04684929a29c5f9a544aa';


/**
 * Configuration for profile picture (square) crop
 * @type {Object}
 */
const CROP_PROFILE_PICTURE = {
  label: 'Profile Picture',
  icon: 'fa fa-user',
  dimensions: '1:1',
};


/**
 * Configuration for Facebook cover crop
 * @type {Object}
 */
const CROP_FACEBOOK_COVER = {
  label: 'Facebook Cover',
  icon: 'fa fa-facebook',
  dimensions: '851:315',
};


/**
 * Configuration for Twitter cover crop
 * @type {Object}
 */
const CROP_TWITTER_COVER = {
  label: 'Twitter Cover',
  icon: 'fa fa-twitter',
  dimensions: '1500:500',
};


/**
 * @class The AppComponent controls the application logic and high-level
 *        display rendering.
 */
class AppComponent extends Component {


  /**
   * Initialize the application.
   * @param {Object} props
   */
  constructor(props: any) {

    // Initialize props.
    super(props);

    // Initialize state.
    this.state = {
      image: '',
      editedImage: '',
      crop: null,
    };

    // Self-bind event handlers and subcomponent callbacks.
    this.handleLoaderSet = this.handleLoaderSet.bind(this);
    this.handleLoaderError = this.handleLoaderError.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleEditorSet = this.handleEditorSet.bind(this);

  }


  /**
   * Render the image loader.
   */
  renderImageLoader() {

    return (
      <ImageLoader onSet={this.handleLoaderSet} />
    );

  }


  /**
   * Render the image preview.
   * @param {String} src URL for image
   */
  renderImagePreview(src) {

    return (
      <ImagePreview
        src={src}
        onError={this.handleLoaderError}
      />
    );

  }


  /**
   *
   */
  renderResetButton() {

    return (
      <ResetButton onReset={this.handleReset} />
    );

  }


  /**
   *
   */
  renderImageEditor(src) {

    return (
      <ImageEditor
        apiKey={CREATIVE_SDK_API_KEY}
        image='image-preview'
        crops={[
          CROP_PROFILE_PICTURE,
          CROP_FACEBOOK_COVER,
          CROP_TWITTER_COVER,
        ]}
        src={src}
        onSet={this.handleEditorSet}
      />
    );

  }


  /**
   *
   */
  renderPublisher(src, crop) {

    const Publisher = {
      [CROP_PROFILE_PICTURE.label]: ProfilePhotoPublisher,
      [CROP_FACEBOOK_COVER.label]: FacebookCoverPublisher,
      [CROP_TWITTER_COVER.label]: TwitterCoverPublisher,
    }[crop.label];

    return (
      <Publisher
        src={src}
      />
    );

  }


  /**
   *
   */
  render() {

    const {
      editedImage,
      image,
      crop,
    } = this.state;

    const components = [];

    if (editedImage) {

      components.push(this.renderImagePreview(editedImage));
      components.push(this.renderPublisher(editedImage, crop));
      components.push(this.renderResetButton());

    } else if (image) {

      components.push(this.renderImagePreview(image));
      components.push(this.renderImageEditor(image));
      components.push(this.renderResetButton());

    } else {

      components.push(this.renderImagePreview('https://lessig2016.us/wp-content/uploads/2015/09/logo.svg'));
      components.push(this.renderImageLoader());

    }

    return (
      <div>
        {components}
      </div>
    );
  }


  /**
   *
   */
  reset() {

    this.setState({
      image: '',
      editedImage: '',
      crop: null,
    });

  }


  /**
   * @param {String} Image URL
   */
  handleLoaderSet(image) {

    this.setState({ image });

  }


  /**
   * TODO move error handling into loader
   */
  handleLoaderError(event) {

    // TODO proper error display
    window.alert('Unable to load image: ' + event.target.src);

    this.reset();

  }


  /**
   * @param {String} Image URL
   */
  handleEditorSet(editedImage, crop) {

    this.setState({
      editedImage,
      crop,
    });

  }



  /**
   *
   */
  handleReset() {

    this.reset();

  }

}

export default AppComponent;
