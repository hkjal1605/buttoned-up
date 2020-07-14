import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionsPageContainer from '../collections/collections.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])
    
    return(
        <div className='shop'>
            <Route exact path = {`${match.path}`} 
            component={CollectionOverviewContainer}
            />
            <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
        </div>
    );
    
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

    
export default connect(null,mapDispatchToProps)(ShopPage);