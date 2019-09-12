import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

export default class NavBar extends Component {
    render() {
        return (
            <div className={'navbar'}>
                <Link to='/'>
                    <div>{'Home'}</div>
                </Link>
                <div>{' | '}</div>
                <Link to='/choosefile'>
                    <div>{'Choose File'}</div>
                </Link>
                <div>{' | '}</div>
                <Link to='/displaySvg'>
                    <div>{'Display Svg'}</div>
                </Link>                
                <div>{' | '}</div>
                <Link to='/reduxdemo'>
                    <div>{'Redux Demo'}</div>
                </Link>                
            </div>
        );
    }
}
