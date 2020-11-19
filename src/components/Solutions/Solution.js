import React, { useEffect, useRef } from 'react';
import styles from './../../styles/_typography.scss';
import Icons from './../Icons/Icons';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from './Solution.scss';

const Solution = props => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, x: '-=30'}, {opacity: 1, x: '+=30', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
        }});
    }, []);

    return (
        <div className={classes.Solution} ref={sectionRef}>
            <Icons src={props.src} />
            <div className={classes.TextBox}>
                <p className={styles.BodyLarge}>{props.text}</p>
            </div>
        </div>
    );
}

export default Solution;