import React from 'react';

import classes from './ButtonAction.scss';

const ButtonAction = (props) => (
<button data-num={props.num} data-buy={props.buy} className={classes.Cta}>{props.name}{props.src ? <img src={props.src} alt='Pic' /> : null}</button>
);

export default ButtonAction;