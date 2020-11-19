import React from 'react';
import {Link as NavLink} from 'react-router-dom';
import styles from './../../styles/_typography.scss';
//ICONS
import logo from './../../assets/images/image8.png';
import github from './../../assets/images/git.png';
import facebook from './../../assets/images/fb.png';

import classes from './Footer.scss';

const Footer = (props) => (
    <footer className={classes.Footer}>
        <div></div>
        <div className={classes.Content}>
            <div className={classes.Top}>
                <div className={classes.Left}>
                    <div className={classes.ImgBox}>
                        <img src={logo} alt='Logo'/>
                    </div>
                    <nav className={classes.NavigationDown}>
                        <ul>
                            <li><NavLink to='.'>Strona główna</NavLink></li>
                            <li><NavLink to='.'>O mnie</NavLink></li>
                            <li><NavLink to='.'>Kontakt</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.Right}>
                    <nav className={classes.NavigationDown}>
                        <ul>
                            <li><NavLink to='.'>Regulamin sklepu</NavLink></li>
                            <li><NavLink to='.'>Regulamin zwrotów</NavLink></li>
                            <li><NavLink to='.'>Rodo</NavLink></li>
                            <li><NavLink to='.'>Polityka prywatności</NavLink></li>
                        </ul>
                    </nav>
                    <div className={classes.SocialBox}>
                        <a href='.'><img src={github} alt='Github icon' /></a>
                        <a href='.'><img src={facebook} alt='Facebook icon' /></a>
                    </div>
                </div>
            </div>
            <div className={classes.Bottom}>
                <p className={styles.Footer}>© Copyright 2020 by Localhost Group sp.z.o.o</p>
            </div>
        </div>
        <div></div>
    </footer>
);

export default Footer;