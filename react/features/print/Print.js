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
import { SelectMenu } from '../../common/selectMenu/SelectMenu';

const mock = [
  {
    "description":"Gadget",
    "quantity":10,
    "cost":9.95,
  },
  {
    "description":"Gadget",
    "quantity":10,
    "cost":9.95,
  }
];

const header = [
  {
    "name":"Descrição",
    "result":"description",
    "type":"string",
    "sizecol":"200px"
  },
  {
    "name":"Quantidade",
    "result":"quantity",
    "type":"number",
    "sizecol":"200px"
  },
  {
    "name":"Custo",
    "result":"cost",
    "type":"number",
    "sizecol":"200px"
  }
]

const resultsTag = [
  "123",
  "456"
]
class Print extends Component {

  constructor () {
    super();
    this.state = {
      mock,
      "optionCoin":"Moeda"
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
      }
    )
    this.setState({mock})

  }

  render = () => {

    const {optionCoin} = this.state;
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
             <SelectMenu
                results={resultsTag}
                value={optionCoin}
                handleClick={(optionCoin) =>
                  this.setState({optionCoin})}
              />
           </div>
           <div className={'card-page-result-right'}>
              <CardResult/>
           </div>
         </div>

         <div>
           <CardList 
            results={mock} 
            header={header}
            onClickList={({index}) => this.removeRow(index)}/>
         </div>

         <div>
            <ButtonRadio obj={{"icon":Add}} onClick={() => this.insertRow()}/>
          </div>

         <div className={'btn-page'}>
           <div>
            <Button 
              obj={{"text":"Reiniciar", "type":"secundary"}} 
              style={{"backgroundColor":"#c2c2c2", "width":"150px", "lineHeight":"40px"}}/>
           </div>
           <div>
           <Button obj={{"text":"Imprimir"}} /* onClick={() => } *//>            
           </div>
         </div>
      </div>
    );
  }
}

export default Print;

