import * as React from 'react';
import './Button.css';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Button = ({
	obj,
	onClick,
	style,
	width = '150px',
	height = '40px',
	className,
	disabled = false
})  => {

	// const styleDisable
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div
				style={{ ...(style || { lineHeight: height, width: width }), ...(disabled && { cursor: 'normal' }) }}
				className={`button-default ${obj && obj.type === 'tertiary'
						? 'button-tertiary'
						: obj && obj.type === 'secundary'
							? 'button-secundary'
							: 'button-primary'
					} ${className}`}
				onClick={!disabled ? onClick : undefined}
				data-testid="button-field"
			>
				{obj ? (
					<span>
						{obj.icon ? (
							<img alt="image5" src={obj.icon} />
						) : obj.iconType === 'fav' ? (
							<FontAwesomeIcon icon={obj.icon} />
						) : (
							''
						)}
						{obj.icon && obj.text ? (
							<span className={'button-space-text'}>
								{obj.text}
							</span>
						) : obj.text ? (
							obj.text
						) : (
							''
						)}
					</span>
				) : (
					''
				)}
			</div>
		</React.Suspense>
	);
};

Button.propTypes = {
  obj: PropTypes.object,
	onClick: PropTypes.func,
	style: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;



