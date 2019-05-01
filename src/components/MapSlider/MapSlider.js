import React, { Component } from 'react';

import './MapSlider.css';

export default class MapSlider extends Component {

  render() {
    return (
      <div className="slider" onScroll={this.handleScroll}>
          {this.props.stuffList.map((item, i) => {
            return (
              <div className="container-image" key={i}>
                <img src={item.picture} alt='' onClick={this.props.expandSlider}/>
              </div>
            )
          })}
        </div>
    )
  }
}
