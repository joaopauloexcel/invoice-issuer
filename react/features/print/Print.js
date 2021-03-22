import React, { Component } from 'react';
import Button from '../../common/button/Button';
import ButtonRadio from '../../common/buttonRadio/ButtonRadio';
import CardHeader from '../../common/cardHeader/CardHeader';
import CardList from '../../common/cardList/CardList';
import CardResult from '../../common/cardResult/CardResult';
import {
	Add,
} from '@material-ui/icons';

import './Print.css';
import '../../assets/global.css';
import Header from '../../common/header/Header';

const mock = [
  {
    "description":"Gadget",
    "quantity":10,
    "cost":9.95,
    "total":"$99.00"
  },
  {
    "description":"Gadget",
    "quantity":10,
    "cost":9.95,
    "total":"$99.00"
  }
];

class Print extends Component {

  constructor () {
    super();
    this.state = {
      mock
    };

    this.removeRow = this.removeRow.bind(this);
    this.insertRow = this.insertRow.bind(this);
  }

  removeRow (index) {

    const {mock} = this.state;
    mock.splice(index, 1)
    this.setState({mock})

  }

  insertRow () {

    const {mock} = this.state;
    mock.push(
      {
        "description":"-",
        "quantity":0,
        "cost":0,
        "total":"0"
      }
    )
    this.setState({mock})

  }

  render = () => {
    return (
      <div className='dashboard card-page'>
          <div>
            <Header/>
          </div>
         <div>
           <CardHeader/>
         </div>
         <div className={'card-page-result'}>
           <div className={'card-page-result-left'}>
              ________________
           </div>
           <div className={'card-page-result-right'}>
              <CardResult/>
           </div>
         </div>
         <div>
           <CardList results={mock} onClickList={({index}) => this.removeRow(index)}/>
         </div>
         <div>
            <ButtonRadio obj={{"icon":Add}} onClick={() => this.insertRow()}/>
          </div>
         <div className={'btn-page'}>
           <div>
            <Button 
              obj={{"text":"RESET", "type":"secundary"}} 
              style={{"backgroundColor":"#c2c2c2", "width":"150px", "lineHeight":"40px"}}/>
           </div>
           <div>
           <Button obj={{"text":"PRINT"}} /* onClick={() => } *//>            
           </div>
         </div>
      </div>
    );
  }
}

export default Print;

