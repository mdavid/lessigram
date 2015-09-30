import React, {Component} from 'react';

class FileLoader extends Component {

  render() {

    return (
      <form>
        <label
          htmlFor="file-loader-input"
          className="btn btn-lg btn-default">
          <i className="fa fa-file-image-o"></i>
          <span>File</span>
          <input
            type="file"
            id="file-loader-input"
            style={{ display: 'none' }}
            onChange={this.handleChange.bind(this)}
          />
        </label>
      </form>
    );

  }

  handleChange(event) {

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => this.props.onSet(reader.result), false);
    reader.readAsDataURL(file);

  }

}

export default FileLoader;
