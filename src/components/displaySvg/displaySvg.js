import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplaySvg extends Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.dataUrl}
                    width={this.props.width}
                    height={this.props.height}
                    alt={'svg'}
                />
            </div>
        );
    }
}

DisplaySvg.propTypes = {
    dataUrl: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default DisplaySvg;
