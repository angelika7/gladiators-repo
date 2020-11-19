import React from 'react';
import HeadingBox from './../HeadingBox/HeadingBox';
import ButtonAction from './../Buttons/ButtonAction/ButtonAction';
import classes from './Info.scss';

const Info = props => {

    return (
    <React.Fragment>
        <div className={classes.RightSide}>
            <div className={classes.ImgBox}>
                <img className={classes.Image} src={props.src} alt='Cartoon person'/>
            </div>
        </div>
        <div className={classes.LeftSide} >
            <HeadingBox left={props.left} title={props.title} text={props.text} />
            <a href='#shop'><div className={classes.ButtonBox}><ButtonAction name={props.name} /></div></a>
        </div>
    </React.Fragment>
    )
};

export default Info;