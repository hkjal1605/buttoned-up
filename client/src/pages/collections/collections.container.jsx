import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/withSpinner.component';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsPage from './collections.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;