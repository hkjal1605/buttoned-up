import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collectionItem.component';

import './collections.styles.scss';

const CollectionsPage = ({ collection }) => {
    const { title, items} = collection
    return (
    <div className='collection-page'>
        <h2 className='collection-page__title'>{title}</h2>
        <div className='collection-page__items'>
            {items.map(
                item => (<CollectionItem key={items.id} item={item}></CollectionItem>)
            )}
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionsPage);