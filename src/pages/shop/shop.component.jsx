import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionsPage from '../collections/collections.component';

const ShopPage = ({ match }) => {
    console.log(match.path)
    return(
    <div className='shop'>
        <Route exact path = {`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </div>
)}

    
export default ShopPage;