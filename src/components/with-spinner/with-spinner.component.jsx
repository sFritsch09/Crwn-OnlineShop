import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

import React from 'react';

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer></SpinnerContainer>
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps}></WrappedComponent>
		);
	};
	return Spinner;
};

export default WithSpinner;
