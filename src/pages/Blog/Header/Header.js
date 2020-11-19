import React from 'react';
import styles from './../../../styles/_typography.scss';
import HeadingBox from './../../../components/HeadingBox/HeadingBox';

import classes from './Header.scss';

const Header = props => (
    <header className={classes.Content}>
        <HeadingBox center={true} title='Witaj na Blogu!' text='Tutaj odnajdziesz wszystkie informacje o spółeczności Gladiatorów Javascriptu' />
        <div className={classes.Sort}>
        <label className={styles.BodyLarge} htmlFor="sort">Sortuj według:</label>
        <select className={styles.BodyLarge} name="sort" id="sort">
            <option className={styles.BodyLarge} value="latest">od najnowszego</option>
            <option className={styles.BodyLarge} value="eldest">od najstarszego</option>
        </select>
        </div>
    </header>
);

export default Header;