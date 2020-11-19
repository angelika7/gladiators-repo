import React from 'react';

import classes from './Icons.scss';

const Icons = (props) => (
    <div className={classes.IconBox}>
        <img src={props.src} alt='Icon' className={classes.Icon} />
    </div>
);

export default Icons;