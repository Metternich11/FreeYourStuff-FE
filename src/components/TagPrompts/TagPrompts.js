import React, { Component } from "react";

import "./TagPrompts.css";

export default class TagPrompts extends Component {
  submitStuff = () => {
    if (this.props.number === 3) return;
    if (this.props.number === 2) this.props.submitStuff();
  };

  render() {
    return (
      <div className="prompts">
        {this.props.number === 3 ? (
          <a onTransitionEnd={this.glow} ref="glowy">
            Take a Photo
          </a>
        ) : null}
        <a onTransitionEnd={this.glow} ref="glowy2">
          Remove Tag
        </a>
        <a className="btn-primary" onClick={this.submitStuff}>
          {this.props.buttonName}
        </a>
      </div>
    );
  }
}
