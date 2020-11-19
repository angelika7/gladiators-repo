import React, { useEffect, useState, useRef } from 'react';
import styles from './../../styles/_typography.scss';
//import stylesCta from './../Buttons/ButtonAction/ButtonAction.scss';
import stylesForm from './../../components/Input/Input.scss';
import ButtonAction from './../Buttons/ButtonAction/ButtonAction';
import Input from './../../components/Input/Input';

//ICONS
import plus from './../../assets/images/plus.png';
import minus from './../../assets/images/minus.png';
import exit from './../../assets/images/exit.png';
import card from './../../assets/images/card.png';
import git from './../../assets/images/git.png';

import book1 from './../../assets/images/gladiators-mid-junior.png';
import book2 from './../../assets/images/gladiators2star.png';
import book3 from './../../assets/images/gladiators-nevbie.png';
//import book4 from './../../assets/images/image8.png';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from './ShopCart.scss';

const ShopCart = (props) => {
    const [height, setHeight] = useState(null);
    const getHeight = () => {
        const height = document.querySelector('#booksTop').offsetTop;
        setHeight(height)
    };

    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if(height !== null) {
            getHeight();
        }
        
        gsap.fromTo(sectionRef.current, {opacity: 0, y: '+=20'}, {opacity: 1, y: '-=20', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
        }});
    }, [])

    let myBooks = (
        <div className={classes.MyBooks}>   
                    <div className={classes.Top}>
                        <div className={classes.ImgBox}>
                           <img src={book1} alt='Book' /> 
                        </div>
                        <div className={classes.RightSide}>
                        <h3 className={styles.HeadingTertiary}>Ambitne i wymagające zadania z JS i React</h3> 
                            
                            <div className={classes.HashesBox}>
                                
                                <div className={classes.Hash}><p className={styles.BodySmall}>#hoc</p></div>
                                <div className={classes.Hash}><p className={styles.BodySmall}>#hooks</p></div>
                                <div className={classes.Hash}><p className={styles.BodySmall}>#javascript</p></div>
                                <div className={classes.Hash}><p className={styles.BodySmall}>#junior</p></div>
                                <div className={classes.Hash}><p className={styles.BodySmall}>#react</p></div>
                                <div className={classes.Hash}><p className={styles.BodySmall}>#redux</p></div>
                                <div className={classes.Hash}><p className={styles.BodySmall}>#router</p></div>
                            </div>
                            <p className={styles.BodySmall}>Zbiór z zaawansowanymi zadaniami z JS i React</p> 
                            <div className={classes.PricesBox}>
                                <div className={classes.AmountBox}>
                                    <img src={plus} alt='Plus' />
                                    <h3 className={styles.HeadingTertiary}>1</h3>
                                    <img src={minus} alt='Minus' />
                                </div>
                                <h3 className={styles.HeadingTertiary}><span className={styles.HeadingTertiary}>120</span> zł</h3>
                            </div>
                            <form className={classes.Form}>
                                <label className={styles.BodySmall}>Miejsce na Twój kupon</label>
                                <input type='text' placeholder='np. b73hsa2k56'/>
                            </form>
                        </div>
                    </div>
                    <div className={classes.Middle}>
                        <p className={styles.BodySmall}>Twój koszyk</p>
                        <div className={classes.BoxBuy}>
                            {/* {props.book.map((i, el) => {
                            return <div className={classes.Book}>
                            <img src={exit} alt='Exit' className={classes.ExitSmall} />
                            <div className={classes.ImgMini}>
                                <img src={props.book} alt='Book' />
                            </div>
                            <p className={styles.TextSmall}>Ambitne i wymagające zadania z JS i React</p>
                            <p className={styles.Price}><span className={styles.Price}>320</span> zł</p>
                        </div>
                        })} */}

                            <div className={classes.Book}>
                                <img src={exit} alt='Exit' className={classes.ExitSmall} />
                                <div className={classes.ImgMini}>
                                    <img src={book1} alt='Book' />
                                </div>
                                <p className={styles.TextSmall}>Ambitne i wymagające zadania z JS i React</p>
                                <p className={styles.Price}><span className={styles.Price}>320</span> zł</p>
                            </div>
                            <div className={classes.Book}>
                                <img src={exit} alt='Exit' className={classes.ExitSmall} />
                                <div className={classes.ImgMini}>
                                    <img src={book2} alt='Book' />
                                </div>
                                <p className={styles.TextSmall}>Ambitne i wymagające zadania z JS i React</p>
                                <p className={styles.Price}><span className={styles.Price}>320</span> zł</p>
                            </div>
                            <div className={classes.Book}>
                                <img src={exit} alt='Exit' className={classes.ExitSmall} />
                                <div className={classes.ImgMini}>
                                    <img src={book1} alt='Book' />
                                </div>
                                <p className={styles.TextSmall}>Ambitne i wymagające zadania z JS i React</p>
                                <p className={styles.Price}><span className={styles.Price}>320</span> zł</p>
                            </div>
                            <div className={classes.Book}>
                                <img src={exit} alt='Exit' className={classes.ExitSmall} />
                                <div className={classes.ImgMini}>
                                    <img src={book3} alt='Book' />
                                </div>
                                <p className={styles.TextSmall}>Ambitne i wymagające zadania z JS i React</p>
                                <p className={styles.Price}><span className={styles.Price}>320</span> zł</p>
                            </div> 
                            
                        </div>
                    </div>
                    <div className={classes.Bottom}>
                        <h3 className={styles.HeadingTertiary}>Razem: <span className={styles.HeadingTertiary}>920</span>zł</h3>
                        <div className={classes.ButtonBox}><ButtonAction name='Dołącz do Gladiatorów' src={card} /></div>
                    </div>
                </div>
    ) 

    let payment = (
        <div className={classes.Payment}>
            <h3 className={styles.HeadingTertiary}>Płatność</h3>
            <p className={styles.BodySmall}>Dane osobowe / Dane do wysyłki</p>
            <form className={stylesForm.Form}>
                    <Input for='name' type='text' text='Twoje imię' placeholder='np. Jan' />
                    <Input for='surname' type='text' text='Twoje nazwisko' placeholder='np. Kowalski' />
                    <Input for='email' type='email' text='Twój adres email' placeholder='np. jan@kowalski.pl' />
                <div className={classes.GitBox}>
                    <p className={styles.BodySmall}>Zaloguj się do Githuba, aby potwierdzić że jesteś programistą</p>
                    <div className={classes.ButtonBox}><ButtonAction name='Zaloguj się' src={git} /></div>
                </div>
                    <Input for='street' type='text' text='Ulica' placeholder='np. Miejska 4' />
                    <Input for='city' type='text' text='Miasto' placeholder='np. Warszawa' />
                    <Input for='zip-code' type='text' text='Kod pocztowy' placeholder='np. 00-001' />
                    <Input for='country' type='text' text='Kraj' placeholder='np. Polska' />
                <div className={classes.CheckGroup}>
                    <input type="checkbox" className={classes.Checkbox} id="delivery" />
                    <label htmlFor="delivery" className={classes.CheckLabel}>
                        <span className={classes.CheckButton}></span>
                        <p className={styles.BodySmall}>Darmowa dostawa</p>
                    </label>
                </div>
                <div className={[stylesForm.FormElement, classes.Bottom].join(' ')}>
                <h3 id='pay' className={styles.HeadingTertiary}>Razem: <span className={styles.HeadingTertiary}>920</span> zł</h3>
                    <div className={classes.ButtonBox}><ButtonAction name='Przejdź do płatności' src={card} /></div> 
                </div>
            </form>
        </div>
    )
    
    return (
        <div className={props.show ? [classes.Container, classes.Open].join(' ') : classes.Container}>
            <div className={classes.Box} style={{top: height + 'px'}} ref={sectionRef}> 
            {/* <div className={classes.Box} ref={sectionRef}> */}
                <div className={classes.ShopCart}>
                    <img src={exit} alt='Exit' className={classes.Exit} onClick={props.hideShop} />
                    {myBooks}
                </div>
                <div className={classes.ShopCart}>
                    <img src={exit} alt='Exit' className={classes.Exit} onClick={props.hideShop} />
                    {payment}
                </div>
            </div>
        </div>
    );
    
}

export default ShopCart;