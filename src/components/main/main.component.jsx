import React from 'react';

import main from '../../img/main.jpg';
import main_2 from '../../img/main-2.jpg';
import main_4 from '../../img/main-4.jpg';

import { withRouter } from 'react-router-dom';

import './main.styles.scss';
 
const Main = ({ history, match }) => (
    <section className='main'>
        <img src={main} alt='Photo Main' className='main__img--1'></img>
        <img src={main_2} alt='Photo Main' className='main__img--2'></img>
        <img src={main_4} alt='Photo Main' className='main__img--4'></img>
        <div className='main__content'>
            <h2 className='main__text'>All Kinds of Fashion Clothing and Accessories You Can Dream Of!</h2>
            <a onClick={() => history.push(`${match.url}shop`)} className='main__button'>Explore Our Collections</a>
        </div>
        
    </section>
)

export default withRouter(Main);