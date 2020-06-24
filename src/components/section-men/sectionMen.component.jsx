import React from 'react';

import men_1 from '../../img/men-1.jpg';
import men_2 from '../../img/men-2.jpg';

import './sectionMen.styles.scss';

const SectionMen = () => (
    <section className='men'>
        <img src={men_1} alt='Man 1' className='men__img--1'></img>
        <img src={men_2} alt='Man 2' className='men__img--2'></img>
        <div className='men__content'>
            <h4 className='men__content-1'>clothing and accessories</h4>
            <h1 className='men__content-2'>Men</h1>
            <a href='#' className='men__button'>Shop Now</a>
        </div>
    </section>
)

export default SectionMen;