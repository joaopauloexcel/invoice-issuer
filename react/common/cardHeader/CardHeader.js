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

    const {setNumberNf} = this.props;

    setNumberNf(event.target.value)

  }

  render () {

    const {takerName,
      takerReason,
      takerStreet,
      takerCity,
      takerDocument,
      providerName,
      providerReason,
      providerStreet,
      providerCity,
      providerDocument} = this.state;

    const {numberNf} = this.props;
      
    return (
      <div className='card-header'>
          <div className='card-header-top'>
              <b>Nº Invoice</b>: 
              <input 
                style={{"borderBottom":"1px solid #c4c4c4", "width":"40px"}} 
                type="text"
                value={numberNf}
                name={'numberNf'} 
                onChange={this.onChange}/>
          </div>
         <div className='card-header-container'>
            <div className='card-header-left'>
                <div>
                  <b>Prestador</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={takerName} name={'takerName'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Razão Social</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" 
                    value={takerReason} 
                    name={'takerReason'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Endereço</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={takerStreet} name={'takerStreet'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Cidade</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={takerCity} name={'takerCity'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Documento</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={takerDocument} 
                    name={'takerDocument'} 
                    onChange={this.onChange}/>
                </div>
            </div>
            <div className='card-header-right'>
                <div>
                  <b>Tomador</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={providerName} 
                    name={'providerName'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Razão Social</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={providerReason} 
                    name={'providerReason'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Endereço</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={providerStreet} 
                    name={'providerStreet'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Cidade</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={providerCity} 
                    name={'providerCity'} 
                    onChange={this.onChange}/>
                </div>
                <div>
                  <b>Documento</b>: 
                  <input 
                    style={{"borderBottom":"1px solid #c4c4c4"}} 
                    type="text" value={providerDocument} 
                    name={'providerDocument'} 
                    onChange={this.onChange}/>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

CardHeader.propTypes = {
  "numberNf":PropTypes.number,
  "setNumberNf":PropTypes.func,
  "totalNf":PropTypes.number,
};

const mapStateToProps = (state) => ({
  "numberNf": state.cardResult.numberNf,
});

const mapDispatchToProps = (dispatch) => ({
  "setNumberNf": (value) => dispatch(setNumberNf(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHeader)

