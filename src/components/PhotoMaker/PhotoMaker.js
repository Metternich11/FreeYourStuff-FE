import React, { Component } from "react";
import FileDrop from "react-file-drop";

import "./PhotoMaker.css";

export default class PhotoMaker extends Component {
  render() {
    return (
      <div>
        <FileDrop onDrop={this.props.uploadPic} className="drag-and-drop">
          <p>Drag & Drop</p>
          <input
            type="file"
            id="fileuploader"
            name="file"
            accept="*"
            onChange={this.props.uploadPic}
          />
          <label htmlFor="fileuploader">
            <i className="fas fa-camera" />
          </label>
        </FileDrop>

        {/* <div className="photoDiv">
          <p className="upLoadText"> Use your webCam </p>
          <div className="photoMaker" onClick={this.props.startRecording}>
            <i className="fas fa-camera"></i>
          </div>
        </div> */}
      </div>
    );
  }
}
