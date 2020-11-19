import React from 'react';
import Navigation from '../NavList/NavList';

import classes from './toolbar.scss';

const Toolbar = (props) => (
    <nav className={props.open ? [classes.Toolbar, classes.IsOpened].join(' ') : classes.Toolbar}>
        <Navigation hide={props.hide}/>
    </nav>
);

export default Toolbar;