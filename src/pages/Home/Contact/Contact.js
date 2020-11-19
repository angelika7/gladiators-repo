import React from 'react';
import Input from './../../../components/Input/Input';
import stylesHeading from './../../../components/HeadingBox/HeadingBox.scss';
import stylesForm from './../../../components/Input/Input.scss';
import stylesLabel from './../../../styles/_typography.scss';
import styles from './../../../components/Buttons/ButtonAction/ButtonAction.scss';

import classes from './Contact.scss';

//ICONS
import src from './../../../assets/images/comments.png';

const Contact = props => (
    <section className={classes.Contact} id='contact'>
        <div className={stylesHeading.HeadingBox}>    
            <h1 className={stylesLabel.HeadingPrimary}>Skontaktuj się ze mną!</h1>
            <p className={stylesLabel.BodyLarge}>Jeśli masz jakieś pytania lub wątpliwości - <span className={classes.Underline}>Napisz do mnie!</span></p>
        </div>
        <div className={classes.Content}>
            <div className={classes.ImgBox}>
                <img className={classes.Image} src={src} alt='Cartoon person'/>
            </div>
            <form className={stylesForm.Form}>
                <div className={stylesForm.FormElement}>
                    <label className={stylesLabel.BodySmall} htmlFor='message'>Twoja wiadomość</label>
                    <textarea placeholder='np. Ten zestaw mi naprawdę pomógł!' id='message'></textarea>
                </div>
                    <Input for='name' type='text' text='Twoje imię i nazwisko' placeholder='np. Jan Kowalski' />
                    <Input for='email' type='email' text='Twój adres email' placeholder='np. jan@kowalski.pl' />
                <div className={stylesForm.FormElement}>
                    <input className={styles.Cta} type='submit' value='Wyślij wiadomość'></input>
                </div>
            </form>
        </div>
    </section>
);

export default Contact;