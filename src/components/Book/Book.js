import React from 'react';
import styles from './../../styles/_typography.scss';
import ButtonAction from './../Buttons/ButtonAction/ButtonAction';

import classes from './Book.scss';

const Book = props => {

    return (
    <div className={props.newHeight ? [classes.BookBox, classes.Box].join(' ') : classes.BookBox } >
        <img src={props.src} alt='Book' className={classes.Img}/>
        <h3 className={styles.HeadingTertiary}>{props.title}</h3>
        <p className={styles.BodyLarge}>{props.text}</p>
        <div className={classes.PriceBox}>
            <h2 className={styles.HeadingSecondary}>{props.newprice}</h2>
            <p className={styles.BodyLarge}>{props.price}</p>
        </div>
        <div onClick={props.showShop} className={classes.ButtonBox}><ButtonAction num={props.num} buy={props.buy} name='Kliknij, aby zamówić!' /></div>
    </div>
        
    )
};

export default Book;