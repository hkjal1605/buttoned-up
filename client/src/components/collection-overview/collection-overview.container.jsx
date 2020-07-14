import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/withSpinner.component';
import CollectionOverview from '../collection-overview/collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;