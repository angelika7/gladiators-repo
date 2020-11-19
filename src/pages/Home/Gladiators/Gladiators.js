import React from 'react';
import styles from './../../../styles/_typography.scss';
import Solution from './../../../components/Solutions/Solution';
import classes from './Gladiators.scss';

//ICONS
import src1 from './../../../assets/images/spolecznosc-js.png';
import src2 from './../../../assets/images/trudne-zadania.png';
import src3 from './../../../assets/images/unikatowe-projekty.png';

const Gladiators = props => (
    <section className={classes.Gladiators}>
        <h1 className={styles.HeadingPrimary}>Gladiatorzy to</h1>
        <div className={classes.GlariatorsBox}>
            <Solution src={src1} text='Świadoma i zmotywowana społeczność młodych JS devów' />
            <Solution src={src2} text='Trudne zadania techniczne, przy których rekrutacja to pestka' />
            <Solution src={src3} text='Unikatowe projekty do portfolio pozwalające się wybić w tłumie todolist' />
        </div>
        <h3 className={styles.HeadingTertiary}>Lepiej uczyć się w zgranej grupie, niż samemu!</h3>
    </section>
);

export default Gladiators;