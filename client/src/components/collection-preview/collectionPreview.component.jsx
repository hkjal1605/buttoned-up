import React from 'react';

import { withRouter } from 'react-router-dom';

import './collectionPreview.styles.scss';

import CollectionItem from '../collection-item/collectionItem.component';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className='container'>
        <div className='container__link' onClick={() => history.push(`${match.path}/${routeName}`)}>
            <h2 className='container__heading'>{ title.toUpperCase() } &rarr;</h2>
            <div className='container__link--circle'></div>
        </div> 
        
        <div className='container__items'>
            {items.filter((item, index) => index < 4)
                  .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview);