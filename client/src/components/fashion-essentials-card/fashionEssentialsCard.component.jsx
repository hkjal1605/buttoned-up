import React from 'react';

import './fashionEssentialsCard.styles.scss';

import {withRouter} from 'react-router-dom';

const FashionEssentialsCard = ({ title, id, imgUrl, color, history, linkUrl, match }) => (
    <div className='card'>
        <img src={ imgUrl } alt={ title } className='card__img'></img>
        <div className='card__content'>
            <h2 className='card__content--heading' style={{ outline: `5px solid ${color}`}}>{ title }</h2>
            <a  onClick={() => history.push(`${match.url}${linkUrl}`)} className='card__content--button'>Shop Now</a>
        </div>
    </div>
)

export default withRouter(FashionEssentialsCard);