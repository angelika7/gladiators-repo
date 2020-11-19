import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';

import classes from './NavList.scss';

class NavList extends Component {
    state = {
        selectedTabId: 1,
    };
    isActive = (id) => {
        return this.state.selectedTabId === id;
    }

    setActiveTab = (selectedTabId) => {
        this.setState({ selectedTabId });

        if(selectedTabId === 1 || selectedTabId === 3) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    render() {
        const links = [
            {id: 1, link: '/', text: 'Strona główna'},
            {id: 2, link: '/#about', text: 'O mnie'},
            {id: 3, link: '/blog', text: 'Blog'},
            {id: 4, link: '/#contact', text: 'Kontakt'},
        ];
    
    return(
        <ul className={classes.NavList}>
            <NavItem id='cta' button={true} link='/#shop' text='Zostań Gladiatorem JS!'></NavItem>
            {links.map((el, i) => {
                return <NavItem
                key={i}
                link={el.link}
                text={el.text}
                isActive={this.isActive(el.id)}
                onClick={() => {
                    this.setActiveTab.bind(this, el.id)()
                    this.props.hide();
                }} />
            })}
        </ul>
    )}
};

export default NavList;