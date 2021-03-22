import React, { Component } from 'react';
import Button from '../button/Button';

import './Card.scss';

const mock = [
  {
    "description":"Gadget",
    "quantity":10,
    "cost":9.95,
    "total":"$99.50"
  }
]
class Card extends Component {
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

export default Card;

