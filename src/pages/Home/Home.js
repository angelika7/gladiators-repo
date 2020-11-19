import React from 'react';
import classes from './../../containers/Layout/Layout.scss';

import Header from './Header/Header';
import About from './About/About';
import Users from './Users/Users';
import Teacher from './Teacher/Teacher';
import Advantages from './Advantages/Advantages';
import Shop from './Shop/Shop';
import Warranty from './Warranty/Warranty';
import Gladiators from './Gladiators/Gladiators';
import Contact from './Contact/Contact';

//ICONS

import decor1 from './../../assets/images/decor1.png';
import decor2 from './../../assets/images/decor2.png';
import decor3 from './../../assets/images/decor3.png';
import decor4 from './../../assets/images/decor4.png';
import decor5 from './../../assets/images/decor5.png';
import decor6 from './../../assets/images/decor6.png';

const Home = props => {

    return(
    <div className={classes.Layout}>
            <div className={classes.LeftSide}>
                <img className={classes.DecorLeft} src={decor2} alt='Decoration'/>
                <img className={classes.DecorLeft} src={decor4} alt='Decoration'/>
                <img className={classes.DecorLeft} src={decor6} alt='Decoration'/>
            </div>
            <main className={classes.Container}>
                <Header />
                <About />
                <Users />
                <Teacher />
                <Advantages />
                <Shop showShop={props.showShop}/>
                <Warranty />
                <Gladiators />
                <Contact />
            </main>
            <div className={classes.RightSide}>
                <img className={classes.DecorRight} src={decor1} alt='Decoration'/>
                <img className={classes.DecorRight} src={decor3} alt='Decoration'/>
                <img className={classes.DecorRight} src={decor5} alt='Decoration'/>
            </div>
        </div>
    )
        
};

export default Home;