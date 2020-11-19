import React, { Component } from 'react';
import styles from './../../..//styles/_typography.scss';
import Solution from './../../../components/Solutions/Solution';
import Modal from './../../../components/Modal/Modal';
import Review from '../../../components/Review/Review';

//IMAGES
import img1 from './../../../assets/images/users/Ellipse-user.png';
import img2 from './../../../assets/images/users/Ellipse-3.png';
import img3 from './../../../assets/images/users/Ellipse-7.png';
import img4 from './../../../assets/images/users/Ellipse-10.png';
import img5 from './../../../assets/images/users/Ellipse-15.png';
import img6 from './../../../assets/images/users/Ellipse-19.png';

//ICONS 
import url1 from './../../../assets/images/mentor.png';
import url2 from './../../../assets/images/znajdziesz-programistów.png';
import url3 from './../../../assets/images/aktualna-wiedza-i-rabaty.png';

import classes from './Advantages.scss';

class Advantages extends Component {
    state = {
        reviews:[
            {id: 0, url: img1, name: 'Anna Kostrzewska', review: `“Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje umiejętności.”` },
            {id: 1, url: img2, name: 'Bartosz Nowak', review: `“Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje umiejętności.”` },
            {id: 2, url: img3, name: 'Iwona Świątkowska', review: `“Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje umiejętności.”` },
            {id: 3, url: img4, name: 'Lila Tarnawska', review: `“Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje umiejętności.”` },
            {id: 4, url: img5, name: 'Katarzyna Wolny', review: `“Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje umiejętności.”` },
            {id: 5, url: img6, name: 'Michalina Sęp', review: `“Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje umiejętności.”` }
        ],
        reviewIndex: 0,
        selectedTabId: 0
    }

    componentDidMount() {
        let dots = document.querySelectorAll('#dots > li');

        dots.forEach(dot => {
            
            dot.addEventListener('click', e => {
                let currentDot = e.target.dataset.id;
                this.setState({reviewIndex: currentDot});
            })
        })
    }

    isActive = (id) => {
        return this.state.selectedTabId === id;
    }

    setActiveTab = (selectedTabId) => {
        this.setState({ selectedTabId });
    }

    render() {
        const dots = [0,1,2,3,4,5];

        return (
            <section className={classes.Advantages}>
                <div className={classes.HeadingBox}>
                    <h1 className={styles.HeadingPrimary}>Dołączając do społeczności Gladiatorów na Discordzie</h1>
                </div>
                <div className={classes.AdvantagesBox}>
                    <Solution src={url1} text='Znajdziesz pomoc doświadczonego mentora podczas nauki' />
                    <Solution src={url2} text='Znajdziesz programistów na podobnym poziomie, z którymi będziesz mógł ćwiczyć swoje skile koderskie' />
                    <Solution src={url3} text='Znajdziesz aktualną wiedzę i rabaty na wartościowe kursy oraz kompanów do realizacji projektów do portfolio.' />
                </div>
                <div className={classes.InfoBox}>
                    <p className={styles.BodyLarge}>Ta społeczność jest efektem pracy z ponad 100 programistów przez pół roku w różnych modelach nauki, po to aby znaleźć najlepszą formę nauczania</p>
                </div>
                <div className={classes.ModalBox}>
                    <Modal >
                        <div className={classes.Box}>
                            <Review key={this.state.reviews[this.state.reviewIndex].id} src={this.state.reviews[this.state.reviewIndex].url} name={this.state.reviews[this.state.reviewIndex].name} review={this.state.reviews[this.state.reviewIndex].review}/>
                        </div>
                        <ul className={classes.Dots} id='dots'>
                            {dots.map(el => {
                                return <li className={this.isActive(el) ? [classes.Dot, classes.Active].join(' ') : classes.Dot} onClick={() => {
                                    this.setActiveTab.bind(this, el)()}} key={el} data-id={el}></li>
                                
                            })}
                        </ul>
                    </Modal>
                </div> 
            </section>
        )
    }
};

export default Advantages;