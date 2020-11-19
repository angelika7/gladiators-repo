import React, { useEffect, useRef } from 'react';
import styles from './../../../styles/_typography.scss';
import classes from './About.scss';
import Icon from './../../../components/Icons/Icons';
import Solution from './../../../components/Solutions/Solution';
import HeadingBox from './../../../components/HeadingBox/HeadingBox';

//ICONS
import url1 from './../../../assets/images/graduation-hat1.png';
import url2 from './../../../assets/images/megaphone1.png';
import url3 from './../../../assets/images/laptop1.png';
import url4 from './../../../assets/images/idea1.png';

import url5 from './../../../assets/images/js-dsc.png';
import url6 from './../../../assets/images/cotygodniowe-review.png';
import url7 from './../../../assets/images/zgrane-teamy-portfolio.png';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = props => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, x: '-=20'}, {opacity: 1, x: '+=20', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
        }});
    }, []);
    return(
    <section className={classes.Content} ref={sectionRef}>
        <HeadingBox center={true} title='Zapewne masz problem..' text='Jako młody programista na codzień mierzysz sie z poniższymi problemami:' />
        <div className={classes.ProblemsBox} ref={sectionRef}>
            <div className={classes.FlexEnd}>
                <p className={styles.BodyLarge}><span className={classes.Bold}>Jak</span> skutecznie mam się rozwijać i które umiejętności są istotne?</p>
                <div><Icon src={url1} /></div>    
            </div>
            <div className={classes.FlexStart}>
                <p className={styles.BodyLarge}><span className={classes.Bold}>Gdzie</span> znajdę doświadczonego kolegę, który sprawdzi mój kod?</p>
                <div><Icon src={url2} /></div>    
            </div>
            <div className={classes.FlexEnd}>
                <p className={styles.BodyLarge}><span className={classes.Bold}>Gdzie</span> mogę znaleźć praktyczne zadania programistyczne, które stanowią wyzwanie i zapewnią rozwój?</p>
                <div><Icon src={url3} /></div> 
            </div>
            <div className={classes.FlexStart}>
                <p className={styles.BodyLarge}><span className={classes.Bold}>Gdzie</span> znajdę osoby chętne do współpracy przy projektach?</p>
                <div><Icon src={url4} /></div>    
            </div>
        </div>
        <div className={classes.HeadingBox}>
            <h1 className={styles.HeadingPrimary}>..a ja rozwiązanie!</h1>
            <div className={classes.TextBox}>
                <p className={styles.BodyLarge}>Każdy z tych problemów rozwiązuje inicjatywa, którą nazwałem <span className={classes.Bold}>Gladiatorzy Javascriptu </span></p>
                <p className={styles.BodyLarge}>Można ją opisać w 3 głównych punktach:</p>
            </div>
        </div>
        <div className={classes.SolutionBox}>
            <Solution src={url5} text='Jesteśmy pomocną i zmotywowaną społecznością JSowców na Discordzie' />
            <Solution src={url6} text='Realizujemy trudne i wymagające zadania w code pairing z cotygodniowym code review' />
            <Solution src={url7} text='Pracujemy w zgranych teamach nad ambitnymi projektami do portfolio.' />
        </div>
    </section>
    )
};

export default About;