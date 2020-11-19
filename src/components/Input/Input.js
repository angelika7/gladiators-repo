import React from 'react';
import styles from './../../styles/_typography.scss';
import classes from './Input.scss';

const Input = props => (
    <div className={classes.FormElement}>
        <label className={styles.BodySmall} htmlFor={props.for}>{props.text}</label>
        <input placeholder={props.placeholder} type={props.type} id={props.for}></input>
    </div>
);

export default Input;