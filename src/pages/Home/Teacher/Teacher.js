import React, { useEffect, useRef } from 'react';
import styles from './../../../styles/_typography.scss';
import teacher from './../../../assets/images/teacher.png';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from './Teacher.scss';

const Teacher = props => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, x: '+=20'}, {opacity: 1, x: '-=20', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
        }});
    }, []);
    return (
    <section className={classes.Teacher} id='about'>
            <h1 className={styles.HeadingPrimary}>Poznaj mnie!</h1>
            <div className={classes.ImgBox}>
                <img src={teacher} alt='Me' ref={sectionRef}/>
            </div>
            <div className={classes.Info}>
                <p className={styles.BodyLarge}><span>”</span> CHCĘ BYĆ TAKIM MENTOREM JAKIEGO SAM CHCIAŁBYM 
        MIEĆ, JAK ZACZYNAŁEM SWOJĄ PRZYGODĘ Z 
        PROGRAMOWANIEM PRAWIE 10 LAT TEMU</p>
            </div>
            <div className={classes.Programming}>
                <div className={classes.HeadingBox}>
                    <h1 className={styles.HeadingPrimary}>Programuję..</h1>
                    <p className={styles.BodyLarge}>..bo to zajebiście lubię!</p>
                </div>
                <div className={classes.InfoBox} ref={sectionRef}>
                    <div className={classes.Element}>
                        <div className={classes.Heading}>
                            <h1 className={styles.HeadingPrimary}><span className={[styles.HeadingPrimary, styles.Color].join(' ')}>1+ </span>milion</h1>
                        </div>
                        <p className={styles.BodyLarge}>Wymienionych ze studentami wiadomościa na slacku i messengerze</p>
                    </div>
                    <div className={classes.Element}>
                        <div className={classes.Heading}>
                            <h1 className={styles.HeadingPrimary}>od <span className={[styles.HeadingPrimary, styles.Color].join(' ')}>3 lat</span></h1>
                        </div>
                        <p className={styles.BodyLarge}>Prowadzę mentorską szkołę programowania Localhost Academy</p>
                    </div>
                    <div className={classes.Element}>
                        <div className={classes.Heading}>
                            <h1 className={styles.HeadingPrimary}>ponad <span className={[styles.HeadingPrimary, styles.Color].join(' ')}>100 osób</span></h1>
                        </div>
                        <p className={styles.BodyLarge}>Samodzielnie wprowadziłem do świata Frontendu</p>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Teacher;