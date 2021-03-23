import React, { Component } from 'react';
import {connect} from "../../redux/connect/index.js";
import PropTypes from 'prop-types';

import './CardResult.css';

class CardResult extends Component {

  constructor () {

    super();
    this.state = {
      "resultRate":0,
      "ValueAdd":0,
      "rateNf":0
    };
   
    this.onChange = this.onChange.bind(this); 
    this.percentage = this.percentage.bind(this); 
    this.sumAll = this.sumAll.bind(this);

  };

  componentWillMount () {

  }

  onChange (event) {

    this.setState({[event.target.name]: event.target.value});

  }

  percentage () {

    const {totalNf} = this.props;
    const {rateNf} = this.state;

    return (totalNf * (rateNf / 100)).toFixed(2)

  }

  sumAll () {

    const {totalNf} = this.props;
    const {rateNf} = this.state;

    return (Number(totalNf) + (Number(totalNf) * (rateNf / 100))).toFixed(2)

  }

  render () {

    const {totalNf} = this.props;
    const {rateNf, valueAdd} = this.state;

    return (
      <div className='card-result'>
         <div className='card-result-container'>
            <div className='card-result-left'>
                <div>
                SubTotal
                </div>
                <div>
                Taxa(%)
                <input 
                    style={{"textAlign":"center",
                    "borderBottom":"1px solid #c4c4c4",
                    "width":"50px"
                    }}
                    type={"number"} 
                    name={"rateNf"} 
                    min={0}
                    max={100}
                    onChange={this.onChange}
                    />
                </div>
                <div>
                Total
                </div>
            </div>
            <div className='card-header-right'>
                <div>
                {totalNf || 0}
                </div>
                <div>
                {
                  this.percentage()
                }
                </div>
                <div>
                {this.sumAll()}
                </div>
            </div>
          </div>
      </div>
    );
  }
}

CardResult.propTypes = {
  "setNumberNf":PropTypes.func,
  "totalNf":PropTypes.number,
  "results":PropTypes.array,
  "header":PropTypes.array,
  "onClickList":PropTypes.func,
  "setTotalResult":PropTypes.func,
};

const mapStateToProps = (state) => ({
  "totalNf": state.cardResult.totalNf,
});

const mapDispatchToProps = (dispatch) => ({
  "setTotalResult": (value) => dispatch(setTotalResult(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardResult)
