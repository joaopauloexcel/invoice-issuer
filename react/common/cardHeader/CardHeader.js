import React, { Component } from 'react';
import {connect} from "../../redux/connect/index.js";
import PropTypes from 'prop-types';
import './CardHeader.css';
import { setNumberNf } from '../../redux/action/cardList.js';

class CardHeader extends Component {

  constructor () {

    super();
    this.state = {
      "invoiceNumber":0,
      "takerName":"Joao Paulo",
      "takerReason":"Joao ltda",
      "takerStreet":"Rua Tiradentes",
      "takerCity":"Alterosa, MG - Brasil",
      "takerDocument":"0321232322",
      "providerName":"Pedro Carlos",
      "providerReason":"Pedro ltda",
      "providerStreet":"Av.Joaquim - Zona Sul",
      "providerCity":"São Paulo",
      "providerDocument":"154445454",
    };
    this.onChange = this.onChange.bind(this);  
  };

  onChange (event) {

    this.setState({[event.target.name]: event.target.value}, () => {
      console.log(this.state.invoiceNumber) 
    });

}

  render () {

    const {invoiceNumber,
      takerName,
      takerReason,
      takerStreet,
      takerCity,
      takerDocument,
      providerName,
      providerReason,
      providerStreet,
      providerCity,
      providerDocument} = this.state;

    const {setNumberNf, numberNf} = this.props;
      
    return (
      <div className='card-header'>
          <div className='card-header-top'>
              Nº Invoice: <input type="text" value={numberNf} name={'invoiceNumber'} onChange={this.onChange}/>
          </div>
          <button onClick={() => setNumberNf(2)}>botao</button>
         <div className='card-header-container'>
            <div className='card-header-left'>
                <div>
                Prestador: <input type="text" value={takerName} name={'takerName'} onChange={this.onChange}/>
                </div>
                <div>
                Razão Social: <input type="text" value={takerReason} name={'takerReason'} onChange={this.onChange}/>
                </div>
                <div>
                Endereço: <input type="text" value={takerStreet} name={'takerStreet'} onChange={this.onChange}/>
                </div>
                <div>
                Cidade: <input type="text" value={takerCity} name={'takerCity'} onChange={this.onChange}/>
                </div>
                <div>
                Documento: <input type="text" value={takerDocument} name={'takerDocument'} onChange={this.onChange}/>
                </div>
            </div>
            <div className='card-header-right'>
                <div>
                Tomador: <input type="text" value={providerName} name={'providerName'} onChange={this.onChange}/>
                </div>
                <div>
                Razão Social: <input type="text" value={providerReason} name={'providerReason'} onChange={this.onChange}/>
                </div>
                <div>
                Endereço: <input type="text" value={providerStreet} name={'providerStreet'} onChange={this.onChange}/>
                </div>
                <div>
                Cidade: <input type="text" value={providerCity} name={'providerCity'} onChange={this.onChange}/>
                </div>
                <div>
                Documento: <input type="text" value={providerDocument} name={'providerDocument'} onChange={this.onChange}/>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

CardHeader.propTypes = {
  "setNumberNf":PropTypes.func,
  "totalNf":PropTypes.number,
};

const mapStateToProps = (state) => ({
  "numberNf": state.cardResul.numberNf,
});

const mapDispatchToProps = (dispatch) => ({
  "setNumberNf": (value) => dispatch(setNumberNf(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHeader)

