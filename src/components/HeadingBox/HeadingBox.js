import React from 'react';
import styles from './../../styles/_typography.scss';

import classes from './HeadingBox.scss';

const HeadingBox = props => {
    let heading = null;

    if(props.left) {
        heading = 
        <div className={classes.HeadingBoxStart}>    
            <h1 className={styles.HeadingPrimary}>{props.title}</h1>
            <p className={styles.BodyLarge}>{props.text}</p>
        </div>
    } else if(props.center) {
        heading = 
        <div className={classes.HeadingBox}>    
            <h1 className={styles.HeadingPrimary}>{props.title}</h1>
            <p className={styles.BodyLarge}>{props.text}</p>
        </div>
    } else {
        heading = 
        <div className={classes.HeadingBoxEnd}>    
            <h1 className={styles.HeadingPrimary}>{props.title}</h1>
            <p className={styles.BodyLarge}>{props.text}</p>
        </div>
    }

    return (
        <React.Fragment>
            {heading}
        </React.Fragment>    
    )
};

export default HeadingBox;