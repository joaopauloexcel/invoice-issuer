import React, { Component } from 'react';
import ButtonRadio from '../buttonRadio/ButtonRadio';
import PropTypes from 'prop-types';
import {
	Remove
} from '@material-ui/icons';
import {connect} from "../../redux/connect/index.js";
import './CardList.css';
import { setNumberNf } from '../../redux/action/cardList';

class CardList extends Component {
  render () {
    const {results, onClickList} = this.props;
    return (
      <div className='card-list'>
         {results && results.map((item, index) => (
           <div key={index} className={'card-list-row'}>
             <div>{item.description}</div>
             <div>{item.quantity}</div>
             <div>{item.cost}</div>
             <div>{item.total}</div>
             <div>
                <ButtonRadio 
                  obj={{"icon":Remove}} 
                  style={{"backgroundColor":"#ff83bb", 
                  "lineHeight":"0px", 
                  "height":"30px", 
                  "width":"30px"}}
                  onClick={() => onClickList({index})}  
                />
              </div>
           </div>
         ))}
      </div>
    );
  }
}

CardList.propTypes = {
  "setNumberNf":PropTypes.func,
  "totalNf":PropTypes.number,
  "results":PropTypes.array,
  "onClickList":PropTypes.func,
};

const mapStateToProps = (state) => ({
  "numberNf": state.cardResult.numberNf,
});

const mapDispatchToProps = (dispatch) => ({
  "setNumberNf": (value) => dispatch(setNumberNf(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
