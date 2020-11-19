import React, { useEffect, useRef } from 'react';
import HeadingBox from './../../../components/HeadingBox/HeadingBox';

//USERS
import url1 from './../../../assets/images/users/Ellipse.png';
import url2 from './../../../assets/images/users/Ellipse-1.png';
import url3 from './../../../assets/images/users/Ellipse-2.png';
import url4 from './../../../assets/images/users/Ellipse-3.png';
import url5 from './../../../assets/images/users/Ellipse-4.png';
import url6 from './../../../assets/images/users/Ellipse-5.png';
import url7 from './../../../assets/images/users/Ellipse-6.png';
import url8 from './../../../assets/images/users/Ellipse-7.png';
import url9 from './../../../assets/images/users/Ellipse-8.png';
import url10 from './../../../assets/images/users/Ellipse-9.png';
import url11 from './../../../assets/images/users/Ellipse-10.png';
import url12 from './../../../assets/images/users/Ellipse-11.png';
import url13 from './../../../assets/images/users/Ellipse-12.png';
import url14 from './../../../assets/images/users/Ellipse-13.png';
import url15 from './../../../assets/images/users/Ellipse-14.png';
import url16 from './../../../assets/images/users/Ellipse-15.png';
import url17 from './../../../assets/images/users/Ellipse-16.png';
import url18 from './../../../assets/images/users/Ellipse-17.png';
import url19 from './../../../assets/images/users/Ellipse-18.png';
import url20 from './../../../assets/images/users/Ellipse-19.png';
import url21 from './../../../assets/images/users/Group.png';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classes from './Users.scss';

const Users = props => {
    const users = [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, url17, url18, url19, url20, url21];
    const users2 = [url1, url2, url3, url4, url5, url21];
    let width = window.screen.width;
    let user = null;

    if(width > 700) {
        user = [...users]
    } else {
        user = [...users2]
    }

    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, x: '-=10'}, {opacity: 1, x: '+=10', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
        }});
    }, []);

    return (
    <section className={classes.UsersContent}>
        <HeadingBox center={true} title='Poznaj swoich poprzedników!' text='Przewodzę tej społeczności i daję całą swoją 10 letnią wiedzę i doświadczenie dla dobra nowych pokoleń programistów JS' />
        <div className={classes.UsersBox} ref={sectionRef}>
            {user.map((user, i) => {
                return (
                    <figure className={classes.User} key={i}>
                        <img src={user} alt={'User' + i} />
                    </figure>
                )  
            })} 

        </div>
    </section>
    )
};

export default Users;