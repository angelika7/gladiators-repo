import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../../../styles/_typography.scss';
import stylesCta from './../../../components/Buttons/ButtonAction/ButtonAction.scss';
import stylesDate from './../../../components/Post/Post.scss';
import stylesHash from './../../../components/ShopCart/ShopCart.scss';
import stylesForm from './../../../components/Input/Input.scss';
import Modal from './../../../components/Modal/Modal';
import HeadingBox from './../../../components/HeadingBox/HeadingBox';
import Solution from './../../../components/Solutions/Solution';
import Input from './../../../components/Input/Input';

//IMAGES
import arrow from './../../../assets/images/arrow.png';
import left from './../../../assets/images/left.png';
import right from './../../../assets/images/right.png';
import caffe1 from './../../../assets/images/coffee-cup.png';
import caffe2 from './../../../assets/images/coffee-double.png';

import classes from './Main.scss';

const Main = props => {
    
    return(
    <main className={classes.Content} id='containerArt'>
        <header className={classes.Header}>
            <Link to='/blog' className={classes.BtnBack}>
                <button className={classes.BtnBack}>
                    <img src={arrow} alt='Arrow' />
                    <p className={styles.BodyLarge}>Wróć do listy postów</p>
                </button> 
            </Link>
            <div className={classes.SloganBox}>
                <div className={classes.Box}>
                    <div className={stylesDate.Date} id='Date'><span className={styles.BodyLarge}>20.10.2020</span></div>
                    <h1 className={styles.HeadingPrimary}>Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad</h1>
                    <div className={classes.HashesBox}>   
                        <div className={stylesHash.Hash}><p className={styles.BodySmall}>#gladiatorzy</p></div>
                        <div className={stylesHash.Hash}><p className={styles.BodySmall}>#nauka</p></div>
                    </div>
                </div>
            </div>
        </header>
        <article className={classes.Article}>
            <div className={classes.ArtTop}>
                <div className={classes.PartOne}>
                    <h3 className={styles.HeadingTertiary}>Z uwagi na sezon chorobowy zrobiłem burzę mózgów na temat, który ostatnio bardzo zajmuje moją głowę – Jak można poprawić naukę z Gladiatorami</h3>
                    <p>Przez pierwsze 15 min w Zoomie miałem ustawiony gorszy mikrofon. Coś tam da się posłuchać jednak tak 3/10. Od ok 15 minuty już normalny mikrofon i bardziej żywa dyskusja. Sorry za problemy techniczne i niedopatrzenie</p>
                    <p>Live Code Review z 15.10.2020 można obejrzeć tutaj</p>
                    <a href='https://drive.google.com/file/d/1gPbfoSG-ofqZevWtesHnEUZ1ir70Wh10/view?usp=sharing'><p>https://drive.google.com/file/d/1gPbfoSG-ofqZevWtesHnEUZ1ir70Wh10/view?usp=sharing</p></a>
                    <p>Dzisiejsze zajęcia były wyjątkowe i bardzo owocne, jednak nie w kod, a w koncepcje i rady jak mogę poprawić Gladiatorów i w jaki sposób wyklarowała mi się wizja na dalszy rozwój tej społeczności 🙂</p>
                </div>
                <div className={classes.PartList}>
                    <h3 className={styles.HeadingTertiary}>Jestem w trakcie pisania posta, który będzie zawierać ostateczne zasady społeczności Gladiatorów Javascriptu, ale w skrócie można to opisać tak:</h3>
                    <ul>
                        <li><p>nie będzie to nauka przez 2msc, tylko społeczność której celem jest się skutecznie uczyć JSa długofalowo</p></li>
                        <li><p>co czwartek dalej będą calle z live code review, ale najprawdopodobniej zostaną wprowadzone zajęcia 2x w tygodniu</p></li>
                        <li><p>jednorazowa inwestycja w zestaw 3 zbiorów będzie łączyła się z dożywotnim dostępem do Discorda i możliwością ciągłej nauki</p></li>
                        <li><p>projekty będą realizowane w mniejszych grupach z zarządem PMów i długość projektów do portfolio to max 3 msc</p></li>
                        <li><p>zadania będą realizowane w modelu code pairing w tempie 3 zadań na tydzień</p></li>
                    </ul>
                    <h3 className={styles.HeadingTertiary}>Gladiatorzy zmieniają się w myśl, że nauka programowania to nie sprint – to maraton</h3>
                </div>
            </div>
            <div>
                <div className={classes.ModalBox}>
                    <Modal>
                        <div className={classes.InsideModal}>
                            <div className={classes.Info}>
                                <h1 className={styles.HeadingPrimary}>Do następnego commita!</h1>
                                <p className={styles.BodyLarge}>Jeśli dowiedziałeś czegoś konkretnego z tego posta, to <span className={classes.Bold}>postaw mi kawę</span>, która zasili kolejne posty z materiałami dla programistów!</p>
                            </div>
                            <div className={classes.CaffeeBox}>
                                <Solution src={caffe1} />
                                <Solution src={caffe2} />
                            </div>
                        </div>
                    </Modal>        
                </div> 
                <div className={classes.ModalBoxTwo}>
                    <Modal>
                        <div className={classes.InsideModalTwo}>
                            <HeadingBox left={true} title='Dołącz do listy mailingowej Gladiatorów Javascriptu!' text='Będziesz otrzymywać linki do zajęć z Gladiatorami, przydatne do nauki artykuły oraz informacje odnośnie aktualizacji zbiorów.'/>
                            <div className={classes.Newsletter}>
                                <form>
                                    <Input for='email' type='email' text='Twój adres email' placeholder='np. jan@kowalski.pl' />
                                    <div className={stylesForm.FormElement}>
                                        <input className={stylesCta.Cta} type='submit' value='Wyślij wiadomość'></input>
                                    </div>
                                </form>
                                <div className={classes.NewsletterBox}>
                                    <p className={styles.Newsletter}>* Zapisując się do newslettera zgadzasz się na przetwarzanie swoich informacji osobowych zgodnie z naszą Polityką Prywatności.</p>
                                </div>
                            </div>
                        </div>
                    </Modal>        
                </div> 
                <div className={classes.ArrowsBox}>
                    <a href='.'><div className={classes.Arrow}>
                        <div><img src={left} alt='Arrow' /></div>
                        <div className={classes.ArrowBody}><p className={styles.BodyLarge}>Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad</p></div>
                    </div></a>
                    <a href='.'><div className={classes.Arrow}>
                        <div className={[classes.ArrowBody, classes.ArrowBodyRight].join(' ')}><p className={styles.BodyLarge}>Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad</p></div>
                        <div><img src={right} alt='Arrow' /></div>
                    </div></a>
                </div>
            </div>
            

        </article>
        

    </main>
    )
};

export default Main;