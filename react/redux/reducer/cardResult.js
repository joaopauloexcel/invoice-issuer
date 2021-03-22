import {
    TOTAL_NF,
    RESET_NF,
    NUMBER_NF
} from '../type/index.js';

const initialState = {
    "totalNf":  0,
    "numberNf":  0,
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


    }

    return state;

};