import './custom-button.styles.scss';
import React from 'react';

const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherProps }) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''}${
				isGoogleSingIn ? 'google-sign-in' : ''
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
