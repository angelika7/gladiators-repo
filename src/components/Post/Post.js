import React from 'react';
import styles from './../../styles/_typography.scss';
import styleHash from './../ShopCart/ShopCart.scss';
import search from './../../assets/images/znajdziesz-programistów.png';

import classes from './Post.scss';

const Post = props => (
    <div className={classes.Post}>
        <div className={classes.Top} >
            <img src={props.src} alt="Background" />
            <img className={classes.Search} src={search} alt="Search icon" />
        </div>
        <div className={classes.Bottom}>
            <div className={classes.Date}><span className={styles.BodyLarge}>{props.date}</span></div>
            <p className={styles.BodyLarge}>{props.title}</p>
            <p className={styles.BodySmall}>{props.text}</p>
            <div className={classes.HashesBox}>
                {props.hashes.map((el, i) => {
                    return <div key={i} className={styleHash.Hash}><p className={styles.BodySmall}>{el}</p></div>
                })}         
            </div>
        </div>
    </div>
);

export default Post;