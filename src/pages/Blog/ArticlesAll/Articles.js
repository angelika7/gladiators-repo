import React, { useEffect, useRef } from 'react';
import Post from './../../../components/Post/Post';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

//IMAGES
import img1 from './../../../assets/images/blog/bg.png';
import img2 from './../../../assets/images/blog/bg-1.png';
import img3 from './../../../assets/images/blog/bg-2.png';
import img4 from './../../../assets/images/blog/bg-3.png';
import img5 from './../../../assets/images/blog/bg-4.png';
import img6 from './../../../assets/images/blog/bg-5.png';
import img7 from './../../../assets/images/blog/bg-6.png';
import img8 from './../../../assets/images/blog/bg-7.png';
import img9 from './../../../assets/images/blog/bg-8.png';
import img10 from './../../../assets/images/blog/bg-9.png';
import img11 from './../../../assets/images/blog/bg-10.png';
import img12 from './../../../assets/images/blog/bg-11.png';

import classes from './Articles.scss';

const Articles = props => {
    const posts = [
        {id: 0, src: img9, date: '11.10.2020', title: 'Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 1, src: img2, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 2, src: img3, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 3, src: img4, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 4, src: img5, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 5, src: img6, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 6, src: img7, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 7, src: img8, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 8, src: img9, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 9, src: img10, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 10, src: img11, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
        {id: 11, src: img12, date: '11.10.2020', title: 'Zapytaj studenta Akademii Localhost - część 3 - Karol - Python / Backend + Devops', text: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', hashes: ['#akademia', '#nauka', '#python', '#qa']},
    ];

    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0, y: '-=10'}, {opacity: 1, y: '+=10', duration: 1, easy: "power4.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
        }});
    }, []);
    return(
    <section className={classes.Content} id='container' ref={sectionRef}>
        {posts.map((el, i) => {
            return <Link to={"/blog/:id=" + el.id} key={el.id}>
                    <Post key={el.id} src={el.src} date={el.date} title={el.title} text={el.text} hashes={el.hashes} />
                    </Link>
        })}
    </section>
    )
};

export default Articles;