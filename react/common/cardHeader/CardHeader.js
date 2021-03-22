import React, { Component } from 'react';

import './CardHeader.css';

class CardHeader extends Component {
  render () {
    return (
      <div className='card-header'>
         <div className='card-header-container'>
            <div className='card-header-left'>
                <div className='card-header-top'>
                  Topo: _____
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
            </div>
            <div className='card-header-right'>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
                <div>
                _______________
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CardHeader;

