import React, {Component} from 'react';
import classNames from 'classnames';
import {Modal} from 'react-bootstrap';
import validateURL from '../helpers/validate-url';


const PLACEHOLDER_TEXT = 'https://lessig2016.us/feel-the-nerd.png';


/**
 *
 */
class WebLoader extends Component {


  /**
   * @param  {[type]}
   * @return {[type]}
   */
  constructor(props: any) {

    super(props);

    this.state = this.getInitialState();

    // Self-bind event handlers and subcomponent callbacks.
    this.open = this.open.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);

  }

  getInitialState() {

    return  {
      url: '',
      showModal: false,
      isDisabled: true,
      isFocused: false,
    };

  }

  /**
   * @return {[type]}
   */
  render() {

    const inputClassNames = classNames({
      'form-group': true,
      'col-xs-10': true,
      'col-xs-push-1': true,
      'has-feedback': true,
      'has-success': !this.state.isDisabled,
    });

    return (
      <div>

        <button
          className="btn btn-lg btn-default"
          onClick={this.open}>
          <i className="fa fa-globe"></i>
          <span>Web</span>
        </button>

        <Modal show={this.state.showModal} onHide={this.close}>

          <form className="form-horizontal" onSubmit={this.submit}>

            <Modal.Header>
              <Modal.Title>Load from Web</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <fieldset className="row">
                <div className={inputClassNames}>
                  <label htmlFor="web-loader-src">Image URL:</label>
                  <input
                    type="text"
                    id="web-loader-src"
                    className="form-control"
                    aria-describedby="web-loader-src-help"
                    placeholder={this.state.isFocused ? '' : PLACEHOLDER_TEXT}
                    value={this.state.url}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    ref="webLoaderInput"
                  />
                  <p id="web-loader-src-help" className="help-block">Type or paste the image URL in the field above.</p>
                </div>
              </fieldset>
            </Modal.Body>

            <Modal.Footer>
              <button
                type="reset"
                className="btn btn-lg btn-link"
                onClick={this.close}>
                <span>Cancel</span>
              </button>
              <button
                type="submit"
                className="btn btn-lg btn-primary"
                disabled={this.state.isDisabled}>
                <span>Load</span>
              </button>
            </Modal.Footer>

          </form>

        </Modal>

      </div>
    );

  }

  open() {

    this.setState({
      showModal: true,
    });

    setTimeout(() => React.findDOMNode(this.refs.webLoaderInput).focus(), 100);

  }

  close() {

    this.setState(this.getInitialState());

  }

  handleFocus() {

    this.setState({
      isFocused: true,
    });

  }

  handleBlur() {

    this.setState({
      isFocused: false,
    });

  }

  handleChange(event) {

    const url = event.target.value;

    this.setState({
      url,
      isDisabled: !validateURL(url),
    });

  }

  submit(event) {

    event.preventDefault();

    const onSet = this.props.onSet;
    const url = this.state.url;

    window.addEventListener('transitionend', function deferSet() {

      window.removeEventListener('transitionend', deferSet, false);

      onSet(url);

    }, false);

    this.close();

  }

}

export default WebLoader;
