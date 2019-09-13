import React, { Component } from 'react';
import '../checkBoxSelection/checkBoxSelection.scss';
  class Slider extends Component {

    render() {
      return(
        <div >
          {this.props.option}
          <div>
            <input  type="range" name="points"></input>
          </div>
        </div>
      )
    }
  }
  export default Slider;