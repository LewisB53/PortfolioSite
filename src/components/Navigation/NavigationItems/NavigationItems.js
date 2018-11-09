import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Gallery</NavigationItem>
        <NavigationItem link="/">Contact us</NavigationItem>
        <NavigationItem link="/">Services/Packages</NavigationItem>

    </ul>
);

export default navigationItems;