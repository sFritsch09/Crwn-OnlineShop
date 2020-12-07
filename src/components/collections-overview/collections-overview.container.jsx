import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const mapDispatchToProps = {};

const CollectionsOverviewContainer = compose(
	connect(mapDispatchToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
