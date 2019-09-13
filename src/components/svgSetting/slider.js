import React, { Component } from 'react';
import '../checkBoxSelection/checkBoxSelection.scss';
import PropTypes from 'prop-types';
class Slider extends Component {

    render() {
        return(
            <div >
                {this.props.option}
                <div>
                    <input  type='range' name='points' />
                </div>
            </div>
        );
    }
}
Slider.propTypes = {
    option: PropTypes.string,
    isSelected: PropTypes.bool
};
export default Slider;