import * as React from 'react';
import './ButtonRadio.css';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

export const ButtonRadio = ({
	obj,
	onClick,
	style,
})  => {

	// const styleDisable
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div
				style={style || { lineHeight: '24px', width: '40px' }}
				className={`button-radius`}
				onClick={onClick}
			>
				{obj ?
				   (<obj.icon className={'button-radius.icon'} style={{"fontSize":"26px"}}/>) :
				   ""}
			</div>
		</React.Suspense>
	);
};

ButtonRadio.propTypes = {
	obj: PropTypes.object,
	onClick: PropTypes.func,
	style: PropTypes.object,
};

export default ButtonRadio;



