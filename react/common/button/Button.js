import React, { Fragment } from 'react';
import './Button.css';

const Button = ({ label }) => (
  <Fragment>
      {console.log({label})}
      <button className={`btn-page`}>{label}</button>
  </Fragment>
);

export default Button;


