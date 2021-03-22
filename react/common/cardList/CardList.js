import React, { Component } from 'react';
import ButtonRadio from '../buttonRadio/ButtonRadio';
import {
	Remove
} from '@material-ui/icons';

import './CardList.css';

class CardList extends Component {
  render () {
    const {results} = this.props;
    return (
      <div className='card-list'>
         {results && results.map((item, index) => (
           <div key={index} className={'card-list-row'}>
             <div>{item.description}</div>
             <div>{item.quantity}</div>
             <div>{item.cost}</div>
             <div>{item.total}</div>
             <div><ButtonRadio obj={{"icon":Remove}} style={{"backgroundColor":"#ff83bb", "lineHeight":"24px", "width":"36px"}}/></div>
           </div>
         ))}
      </div>
    );
  }
}

export default CardList;

