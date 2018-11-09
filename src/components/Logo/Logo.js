import React from 'react';

import MoonbowLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={MoonbowLogo} alt="MoonbowLogo" />

    </div>
);

export default logo;