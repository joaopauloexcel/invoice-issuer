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
import Axios from 'axios';
import { setRateCoin, setResetNf, setTypeCoinNf } from '../../redux/action/cardList';
import {connect} from "../../redux/connect/index.js";
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const productPreDefined = [
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

const headerCardList = [
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

class Print extends Component {

  constructor () {
    super();
    this.state = {
      productPreDefined,
      "optionCoin":"Moeda",
      "apiDataCoins":[],
      "apiRatesQuotationObj":{}
    };

    this.removeRow = this.removeRow.bind(this);
    this.insertRow = this.insertRow.bind(this);
    this.getCoinBC = this.getCoinBC.bind(this);
    this.getQuotation = this.getQuotation.bind(this);
    this.resetAll = this.resetAll.bind(this);

  }

  componentWillMount () {
    this.getCoinBC();
    this.getQuotation();
  }

  getCoinBC () {

    Axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas`)
    .then((res) => {
      const {value} = res.data;
      value.push({
        "simbolo": "BRL",
        "nomeFormatado": "Real Brasileiro",
        "tipoMoeda": "B"
      })
      this.setState({"apiDataCoins":value}, () => {
        console.log({"coinsOBJ":this.state.apiDataCoins})
      })
    })
    .catch((error) => {
      return
    })

  }

  getQuotation () {

    Axios.get(`https://api.exchangeratesapi.io/latest?base=BRL`)
    .then((res) => {
      const {rates} = res.data;

      this.setState({"apiRatesQuotationObj":rates})
    })
    .catch((error) => {
      return
    })

  }

  removeRow (index) {

    const {productPreDefined} = this.state;
    productPreDefined.splice(index, 1)
    this.setState({productPreDefined})

  }

  insertRow () {

    const {productPreDefined} = this.state;
    productPreDefined.push(
      {
        "description":"-",
        "quantity":0,
        "cost":0,
      }
    )
    this.setState({productPreDefined})

  }

  setCoin (value) {

    const {setTypeCoinNf, setRateCoin} = this.props;
    const {apiRatesQuotationObj} = this.state;

    setTypeCoinNf(value);
    console.log({apiRatesQuotationObj, value})
    setRateCoin(apiRatesQuotationObj[value]);

  }

  resetAll () {

    const {setResetNf} = this.props;
    this.setState({"productPreDefined":[]}, () => {
      setResetNf();
    });    

  }

  render = () => {

    const {apiDataCoins, productPreDefined} = this.state;
    const {typeCoin} = this.props;

    return (
      <React.Suspense fallback={<CircularProgress />}>
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
                results={apiDataCoins.map((item) => {
                  return ({
                    ...item,
                    "name":item.nomeFormatado || "-",
                    "value":item.simbolo || "USD",
                  })
                })}
                value={typeCoin}
                handleClick={(optionCoin) => this.setCoin(optionCoin.value)}
              />
          </div>

          <div className={'card-page-result-right'}>
              <CardResult/>
          </div>

          </div>

          <div>
          <CardList 
            results={productPreDefined} 
            header={headerCardList}
            onClickList={({index}) => this.removeRow(index)}/>
          </div>

          <div>
            <ButtonRadio obj={{"icon":Add}} onClick={() => this.insertRow()}/>
          </div>

          <div className={'btn-page'}>

          <div>
              <Button 
                obj={{"text":"Reiniciar", "type":"secundary"}} 
                style={{"backgroundColor":"#c2c2c2", "width":"150px", "lineHeight":"40px"}}
                onClick={() => this.resetAll()}/>
          </div>
          <div>
              <Button obj={{"text":"Imprimir"}} onClick={() => window.print()} />            
          </div>

          </div>

        </div>
      </React.Suspense>
    );
  }
}

Print.propTypes = {
	"setTypeCoinNf":PropTypes.func,
  "setResetNf":PropTypes.func,
  "setRateCoin":PropTypes.func,
	"typeCoin":PropTypes.number,
  };
  
const mapStateToProps = (state) => ({
  "typeCoin": state.cardResult.typeCoin,
});

const mapDispatchToProps = (dispatch) => ({
  "setTypeCoinNf": (value) => dispatch(setTypeCoinNf(value)),
  "setRateCoin": (value) => dispatch(setRateCoin(value)),
  "setResetNf": (value) => dispatch(setResetNf(value))
 });

export default connect(mapStateToProps, mapDispatchToProps)(Print)
