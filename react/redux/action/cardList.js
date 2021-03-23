import {
    NUMBER_NF,
    RESET_NF,
    TOTAL_NF,
    TYPE_COIN,
    RATE_COIN
} from '../type/index.js';


export const setTotalResult = (total) => (dispatch) => {

    dispatch({
        "type": TOTAL_NF,
        payload: total
    });
    return Promise.resolve();

};

export const setResetNf = () => {

    return {
        "type": RESET_NF
    };

};

export const setNumberNf = (value) => (dispatch) => {

    console.log({value})
    dispatch({
        "type": NUMBER_NF,
        payload: value
    });
    return Promise.resolve();

};

export const setTypeCoinNf = (value) => (dispatch) => {

    dispatch({
        "type": TYPE_COIN,
        payload: value
    });
    return Promise.resolve();

};

export const setRateCoin = (value) => (dispatch) => {

    console.log({value})
    dispatch({
        "type": RATE_COIN,
        payload: value
    });
    return Promise.resolve();

};