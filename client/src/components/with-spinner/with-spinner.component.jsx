import { SpinnerContainer, SpinnerOverlay } from '../spinner/spinner.styles';
import Spinner from '../spinner/spinner.component';
import React from 'react';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? <Spinner></Spinner> : <WrappedComponent {...otherProps}></WrappedComponent>;
};

export default WithSpinner;
