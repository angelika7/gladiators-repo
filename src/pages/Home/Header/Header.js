import React, { useEffect, useRef } from 'react';
import Info from './../../../components/Info/Info';

import img1 from './../../../assets/images/sitting.png'
import classes from './Header.scss';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = props => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, y: '-=20'}, {opacity: 1, y: '+=20', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 20%',
        }});
    }, []);
    return(
    <header className={classes.Content} ref={sectionRef}>
        <Info left={true} src={img1} name='Dołącz do Gladiatorów Javascriptu!' title='Hej, programisto!' text='Tworzymy społeczność newbie i junior JS devów, którzy chcą wspólnie się uczyć, aby szybciej być gotowym na rynek.' />
    </header>
    )
};

export default Header;