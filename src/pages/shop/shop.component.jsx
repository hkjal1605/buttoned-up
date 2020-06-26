import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionsPage from '../collections/collections.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/withSpinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render() {
        const { match } = this.props;
        const {loading} = this.state;
        return(
            <div className='shop'>
                <Route exact path = {`${match.path}`} 
                    render={props => 
                        (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)
                    } 
                />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionsPageWithSpinner isLoading={loading} {...props} />)} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

    
export default connect(null,mapDispatchToProps)(ShopPage);