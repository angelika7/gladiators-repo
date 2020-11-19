import React from 'react';
import styles from './../../../styles/_typography.scss';
import HeadingBox from './../../../components/HeadingBox/HeadingBox';
import Voucher from './../../../components/Voucher/Voucher';
import Book from './../../../components/Book/Book';
import Modal from './../../../components/Modal/Modal';

//ICONS
import book1 from './../../../assets/images/gladiators-mid-junior.png';
import book2 from './../../../assets/images/gladiators2star.png';
import book3 from './../../../assets/images/gladiators-nevbie.png';
import book4 from './../../../assets/images/logo.png';

import classes from './Shop.scss';

const Shop = props => {

    return (
    <section className={classes.Shop} id='shop'>
        <HeadingBox center={true} title='Wybierz coś dla siebie' text='Możesz w prosty sposób dożywotnio dołączyć do społeczności Gladiatorów inwestując jednorazowo w zestaw zbiorów' />
        <Voucher showShop={props.showShop}/>
        <div className={classes.InfoBox}>
            <p className={styles.BodyLarge}>Jeśli wiesz, że jesteś kozakiem programowania i chciałbyś podjąć próbę nauki samodzielnie to możesz sprawdzić zbiory oddzielnie</p>
        </div>
        <div className={classes.Books} id='booksTop'>
            <Book buy='buy' num='0' showShop={props.showShop} src={book1} title='Nieprzewidziane i sprawiające problemy testy JS i React' text='Zbiór z zaawansowanymi zadaniami na testy z JS i React' newprice='120 zł' price='150 zł'/>
            <Book buy='buy' num='1' showShop={props.showShop} src={book2} title='Ambitne i wymagające zadania z JS i React' text='Zbiór z zaawansowanymi zadaniami z JS i React' newprice='120 zł' price='150 zł'/>
            <Book buy='buy' num='2' showShop={props.showShop} src={book3} title='Rozwijające i utrwalające zadania z HTML, CSS i JS' text='Zbiór zaawansowanych zadań z HTML, CSS i JS' newprice='100 zł' price='150 zł'/>
        </div>
        <div className={classes.ModalBox}>
            <Modal>
                <div className={classes.Content}>
                    <HeadingBox title='Nie wiesz, który zestaw wybrać?' text='Nie kupuj kota w worku! Sprawdź czy Twój poziom frontendowych umiejętności pozwala na dalszy rozwój z moimi zbiorami!' />
                    <Book buy='buy' num='3' showShop={props.showShop} newHeight={true} src={book4} title='Demo Zbiorów - 15 zadań rekrutacyjnych' text='Sprawdź swój poziom, zweryfikuj umiejętności i rozwijaj się dalej z moimi zbiorami!' newprice='21 zł' />
                </div>
            </Modal>
        </div> 
    </section>
    )
};

export default Shop;