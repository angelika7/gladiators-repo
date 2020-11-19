import React from 'react';
import Info from '../../../components/Info/Info';
import classes from './Warranty.scss';

import img from './../../../assets/images/approve.png';

const Warranty = props => (
    <section className={classes.Warranty}>
        <Info left={true} src={img} name='Kliknij, aby sprawdzić!' title='Gwarancja jakości' text='Jeśli w przeciągu roku od zakupu zechcesz zrezygnować z nauki programowania, powiesz mi szczerze dlaczego nie chcesz zostać programistą, a ja zwrócę Ci pieniądze – programowanie jest trudne i nie jest dla wszystkich i doskonale to rozumiem 🙂' />
    </section>
);

export default Warranty;