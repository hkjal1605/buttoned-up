import React from 'react';

import './collectionPreview.styles.scss';

import CollectionItem from '../collection-item/collectionItem.component';

const CollectionPreview = ({ title, items, color_1, color_2 }) => (
    <div className='container' style={{backgroundImage: `linear-gradient(110deg, ${color_1} 0, ${color_1} 60%, transparent 60%, transparent 61%, ${color_2} 61%)`}}>
        <div className='container__link'>
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

export default CollectionPreview;