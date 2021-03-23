import React, { Suspense, useState, useRef, useEffect } from 'react';
import './SelectMenu.css';;
import { CircularProgress } from '@material-ui/core';
import {connect} from "../../redux/connect/index.js";
import PropTypes from 'prop-types';
import Arrow from "../../assets/image/arrow.svg";


export const SelectMenu = ({
	results,
	handleClick,
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef(null);

	function useOutside(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setTimeout(() => setIsOpen(false), 200);
				}
			}
			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	}

	useOutside(wrapperRef);

	return (
		<Suspense fallback={<CircularProgress />}>
			<div className={'select-menu-filter'}>
				<div className="SelectMenu" onClick={() => !isOpen && setIsOpen(true)}>
					<p
						className="mainOption"
						onClick={() => {
							setIsOpen(true);
						}}
					>
						{
							value
						}
					</p>
					<div className="iconArrowDown" onClick={() => !isOpen && setIsOpen(true)}>
						<Arrow/>	
					</div>
				</div>
				{isOpen && (
					<div ref={wrapperRef} className={`SelectDrop`}>
						{results
							.map((item, index) => (
								<div
									onClick={() => {
										setIsOpen(false);
										handleClick(item);
									}}
									key={index}
									className={'subOption'}
								>
									<p>
										{
											item
										}
									</p>
								</div>
							))}
					</div>
				)}
			</div>
		</Suspense>
	);
};

SelectMenu.propTypes = {
	"handleClick":PropTypes.func,
	"totalNf":PropTypes.number,
	"results":PropTypes.array,
	"value":PropTypes.any,
  };
  
const mapStateToProps = (state) => ({
"totalNf": state.cardResult.totalNf,
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu)