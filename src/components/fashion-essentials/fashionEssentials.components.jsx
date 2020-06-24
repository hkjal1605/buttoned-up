import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectEssentialSection} from '../../redux/fashion-essentials/fashionReducer.selectors';

import FashionEssentialsCard from '../fashion-essentials-card/fashionEssentialsCard.component';

import './fashionEssentials.styles.scss';

const FashionEssentials = ({sections}) =>  {
        return (
            <div className='essentials'>
                {sections.map(({ id, ...otherSectionProps }) => (
                    <FashionEssentialsCard key={id} {...otherSectionProps} />
                ))}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
	sections: selectEssentialSection
});


export default connect(mapStateToProps)(FashionEssentials);