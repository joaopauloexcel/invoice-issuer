import React, { Component } from 'react';
import Button from '../../common/button/Button';

import './Print.css';

const mock = [
  {
    "description":"Gadget",
    "quantity":10,
    "cost":9.95,
    "total":"$99.50"
  }
];

class Print extends Component {
  render = () => {
    return (
      <div className='card-page'>
         {mock.map((item, index) => (
           <div key={index}>
             <div>{item.description}</div>
             <div>{item.quantity}</div>
             <div>{item.cost}</div>
             <div>{item.total}</div>
           </div>
         ))}
         <div>
           <Button label={'Teste'}/>
         </div>
      </div>
    );
  }
}

export default Print;

