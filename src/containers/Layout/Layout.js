import React, { useState } from 'react';
import Burger from './../../components/Navigation/Burger/Burger';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Footer from './../../components/Footer/Footer';
import ShopCart from './../../components/ShopCart/ShopCart';
import classes from './Layout.scss';

import logo from './../../assets/images/logo.png';

const Layout = (props) => {
    const [open, setOpen] = useState(false);
    const hideToolbar = () => {
        setOpen(false)
    }
    

    return (
    <div className={classes.Content}>
        <div className={classes.Top}>
            <ShopCart show={props.show} hideShop={props.hideShop} myBooks={props.myBooks}/>
            <Burger onClick={() => {setOpen(!open)}} open={open}/>
            <Toolbar open={open} hide={hideToolbar}/>
            <img src={logo} alt='Logo' className={classes.Logo} />
        </div>
        {props.children}
        <div><Footer /></div>
    </div>
    )
    
};

export default Layout;