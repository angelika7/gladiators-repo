import React from 'react';
//import { NavLink } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import classes from './NavItem.scss';

const NavItem = (props) => {

    return (
        <li id={props.id} data-nav='nav'className={props.button ? classes.Cta : classes.NavItem}>
        <NavLink 
            onClick={props.onClick}
            smooth='true' to={props.link}
            className={props.isActive ? classes.Active : null}
            >{props.text}</NavLink>
        </li>
    );
}



export default NavItem;