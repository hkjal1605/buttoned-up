import React from 'react';
import { connect } from 'react-redux';

import './collectionItem.styles.scss';
import CustomButton from '../custom-button/customButton.component';

import { AddItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, AddItem }) => {
    const {name, price, imageUrl} = item;

    return(
        <div key='id' className='item'>
            <img src={imageUrl} alt='Item Img' className='item__img'></img>
            <div className='item__content'>
                <h4 className='item__content--name'>{name}</h4>
                <h4 className='item__content--price'>${price}</h4>
            </div>
            <CustomButton add onClick={() => AddItem(item)}> Add To Cart </CustomButton>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);