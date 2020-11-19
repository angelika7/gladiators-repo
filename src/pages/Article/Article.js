import React, { useState, useEffect } from 'react';
import Main from './Main/Main';
import classes from './../../containers/Layout/Layout.scss';

//ICONS

import decor1 from './../../assets/images/decor1.png';
import decor2 from './../../assets/images/decor2.png';
import decor3 from './../../assets/images/decor3.png';
import decor4 from './../../assets/images/decor4.png';
import decor5 from './../../assets/images/decor5.png';
import decor6 from './../../assets/images/decor6.png';

const Article = props => {
    
    const [height, setHeight] = useState(null);
    const getHeight = () => {
        const height = document.querySelector('#containerArt').clientHeight + 406;
        setHeight(height)
    }

    useEffect(() => {
        getHeight();
    }, [])

    return (

    <div className={classes.Layout} style={{height: height + 'px'}}>
        <div className={classes.LeftSide}>
            <img className={classes.DecorLeft} src={decor2} alt='Decoration'/>
            <img className={classes.DecorLeft} src={decor4} alt='Decoration'/>
            <img className={classes.DecorLeft} src={decor6} alt='Decoration'/>
        </div>
        <main className={classes.Container}>
            <Main />
        </main>
        <div className={classes.RightSide}>
            <img className={classes.DecorRight} src={decor1} alt='Decoration'/>
            <img className={classes.DecorRight} src={decor3} alt='Decoration'/>
            <img className={classes.DecorRight} src={decor5} alt='Decoration'/>
        </div>
    </div>
    )
};

export default Article;