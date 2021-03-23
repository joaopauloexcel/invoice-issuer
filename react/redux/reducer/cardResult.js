import {
    TOTAL_NF,
    RESET_NF,
    NUMBER_NF,
    TYPE_COIN,
    RATE_COIN
} from '../type/index.js';

const initialState = {
    "totalNf":  0,
    "numberNf":  1,
    "typeCoin":"BRL",
    "rateCoin":1
};

export const totalcardResult = (state = initialState, action) => {

    switch (action.type) {

    case RESET_NF:
        state = {...state, ...initialState};
        break;

    case TOTAL_NF:
        state = {...state, "totalNf": action.payload};
        break;

    case NUMBER_NF:
        state = {...state, "numberNf": action.payload};
        break;

    case TYPE_COIN:
        state = {...state, "typeCoin": action.payload};
        break;

    case RATE_COIN:
        state = {...state, "rateCoin": action.payload};
        break;

    }

    return state;

};