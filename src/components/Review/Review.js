import React, { useEffect, useRef } from 'react';
import styles from './../../styles/_typography.scss';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from './Review.scss';

const Review = props => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, x: '-=10'}, {opacity: 1, x: '+=10', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
        }});
    }, []);
    
    return (
        <div className={classes.ReviewBox} ref={sectionRef}>
            <div className={classes.ImgBox}>
                <img src={props.src} alt='User foto' className={classes.Img} />
            </div>
            <h3 className={styles.HeadingTertiary}>{props.name}</h3>
            <p className={styles.BodyLarge}>{props.review}</p>
        </div>
    );
}

export default Review;