import React from 'react';

import women_1 from '../../img/women-1.jpg';
import women_2 from '../../img/women-2.jpg';

import './sectionWomen.styles.scss';

const SectionWomen = () => (
    <section className='women'>
        <img src={women_1} alt='Woman 1' className='women__img--1'></img>
        <img src={women_2} alt='Woman 2' className='women__img--2'></img>
        <div className='women__content'>
            <h4 className='women__content-1'>clothing and accessories</h4>
            <h1 className='women__content-2'>Women</h1>
            <a href='#' className='women__button'>Shop Now</a>
        </div>
    </section>
)

export default SectionWomen;