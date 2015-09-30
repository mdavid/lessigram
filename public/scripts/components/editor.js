import React, {Component} from 'react';
import Button from './button';


/**
 *
 */
class ImageEditor extends Component {

  /**
   * @param  {[type]}
   * @return {[type]}
   */
  constructor(props: any) {

    super(props);

    this.state = {
      crop: null,
      src: '',
    };

    this.renderCropButton = this.renderCropButton.bind(this);
    this.handleSetCrop = this.handleSetCrop.bind(this);
    this.handleSave = this.handleSave.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleError = this.handleError.bind(this)

    this.feather = new Aviary.Feather({
      apiKey: this.props.apiKey,
      image: this.props.image,
      theme: 'minimum',
      tools: 'stickers',
      appendTo: 'editor',
      cropPresets: [],
      cropPresetsStrict: true,
      forceCropMessage: '',
      onSave: this.handleSave,
      onClose: this.handleClose,
      onError: this.handleError,
    });

  }

  renderCropButton(crop) {
    return (
      <li>
        <Button
          text={crop.label}
          icon={crop.icon}
          value={crop}
          onSet={this.handleSetCrop}
        />
      </li>
    );
  }

  render() {

    return (
      <div className="editor text-center">
        <div id="editor"></div>
        <p>How would you like to use this image?</p>
        <ul className="list-inline">
          {this.props.crops.map(this.renderCropButton)}
        </ul>
      </div>
    );

  }

  handleSetCrop(crop) {

    this.setState({ crop });
    this.launchEditor([crop.label, crop.dimensions]);

  }

  launchEditor(cropPreset) {

    this.feather.launch({
      url: this.props.src,
      forceCropPreset: cropPreset,
    });

  }

  handleSave(id, src) {

    this.setState({ src });
    this.feather.close();

  }

  handleClose() {

    this.props.onSet(this.state.src, this.state.crop);

  }

  handleError() {

    console.log('handleError', arguments);

  }
}

export default ImageEditor;
