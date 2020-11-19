import React from 'react';

import classes from './Burger.scss';

const Burger = (props) => (
    <div className={props.open ? [classes.BurgerBox, classes.Open].join(' ') : classes.BurgerBox} onClick={props.onClick}>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
    </div>
);

export default Burger;