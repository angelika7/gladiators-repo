import React from 'react';
import books from './../../assets/images/books.png';
import styles from './../../styles/_typography.scss';
import ButtonAction from './../Buttons/ButtonAction/ButtonAction';

import classes from './Voucher.scss';

const Voucher = props => {
    return (
    <div className={classes.Voucher}>
        <div className={classes.Top}>
            <img className={classes.Img} alt='Books' src={books} />
            <div className={classes.HeadingBox}>
                <h3 className={styles.HeadingTertiary}>Wszystkie zbiory zadań Gladiatorów Javascriptu</h3>
                <p className={styles.BodyLarge}>Zestaw zbiorów + Dołączenie do społeczności</p>
            </div>
            <div className={classes.PriceBox}>
                <h2 className={styles.HeadingSecondary}>300 zł</h2>
                <p className={styles.BodyLarge}>400 zł</p>
            </div>
        </div>
        <div className={classes.Bottom}>
            <form className={classes.Form}>
                <label className={styles.BodySmall}>Miejsce na Twój kupon</label>
                <input type='text' placeholder='582413'/>
            </form>
            <a href='#shop'><div className={classes.ButtonBox}><ButtonAction name='Dołącz do Gladiatorów' /></div></a>
        </div>
    </div>
    )
};

export default Voucher;