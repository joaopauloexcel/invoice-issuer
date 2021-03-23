import React, { Component, Fragment } from 'react';
import ButtonRadio from '../buttonRadio/ButtonRadio';
import PropTypes from 'prop-types';
import {
	Clear
} from '@material-ui/icons';
import {connect} from "../../redux/connect/index.js";
import './CardList.css';
import { setTotalResult } from '../../redux/action/cardList';

class CardList extends Component {
  constructor () {

    super();
    this.state = {};
    this.onChange = this.onChange.bind(this); 
    this.setDiscount= this.setDiscount.bind(this)
    this.invoiceSubTotal = this.invoiceSubTotal.bind(this)
  };

  componentWillMount () {
    this.invoiceSubTotal();
  }

  onChange (event) {

    this.setState({[event.target.name]: event.target.value}, () => {
      this.invoiceSubTotal();
    });

  }

  invoiceSubTotal () {

    const {results, setTotalResult} = this.props;

    var total = 0;
    results.forEach((item, key) => {      
      total += this.setDiscount(item, key);
    });
    setTotalResult(total.toFixed(2))

  }

  setDiscount (item, index) {

    const total = (item.cost * item.quantity);
    const discount = this.state[index] || 0;
    const discountPercentage = (discount / 100);
    const discountValue = (total * discountPercentage);
    const resultDiscount = (total - discountValue)
    return parseFloat(resultDiscount.toFixed(2)) || 0

  }

  render () {
    const {results, header, onClickList} = this.props;
    
    return (
      <div className={"card-list-page"}>
        <table className={"card-list-container"} style={{"textAlign":"center"}}>
          <thead>
              <tr>
                  {!!header && header.map((item, index) => (
                    <th key={index} style={{"width":item.sizecol || "150px"}}> 
                        {item.name}
                    </th>
                  ))}
                  <th> 
                      Desconto(%)
                  </th>
                  <th> 
                        Total
                  </th>
                  <th/> 
              </tr>
          </thead>
          <tbody>
          {results && results.map((item, index) => (
            <Fragment key={index} >
              <tr className={'tbody-list'} style={index % 2 === 1 ? {"background":"#f5f5f5"} : {}}>

              {header.map((column, index) => (
                <td key={index}> 
                    <input 
                      style={{"textAlign":"center",
                      "borderBottom":"1px solid #c4c4c4"
                      }}
                      type={column.type || "string"} 
                      value={item[column.result]} 
                      name={column.result} 
                      onChange={ (event) => {
                        item[column.result] = event.target.value
                        this.onChange(event)
                        }
                      }/>
                </td>
              ))}
              <td> 
                  <input 
                    style={{"textAlign":"center",
                    "borderBottom":"1px solid #c4c4c4",
                    "width":"100px"
                    }}
                    type={"number"} 
                    min={0}
                    max={100}
                    name={index} 
                    onChange={ (event) => {
                      this.onChange(event)
                      }
                    }/>
              </td>

              <td> 
                  {this.setDiscount(item, index)}  
              </td>

              <td>
                  <ButtonRadio 
                    obj={{"icon":Clear}} 
                    style={{"backgroundColor":"rgb(255 129 129)", 
                    "height":"27px", 
                    "width":"27px"}}
                    styleIcon={{
                      "fontSize":"25px",
                      "paddingBottom":"10px",
                      "fontWeight":"bold"
                    }}
                    onClick={() => onClickList({index})}  
                  />
                </td>
              </tr>
              <tr style={{"height": "10px"}}/>
            </Fragment>
            ))}
            <tr style={{"height": "10px"}}/>
          </tbody>
        </table>
      </div>     
    );
  }
}

CardList.propTypes = {
  "setNumberNf":PropTypes.func,
  "totalNf":PropTypes.number,
  "results":PropTypes.array,
  "header":PropTypes.array,
  "onClickList":PropTypes.func,
  "setTotalResult":PropTypes.func,
};

const mapStateToProps = (state) => ({
  "numberNf": state.cardResult.numberNf,
});

const mapDispatchToProps = (dispatch) => ({
  "setTotalResult": (value) => dispatch(setTotalResult(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
