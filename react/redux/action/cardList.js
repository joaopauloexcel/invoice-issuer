import {
    RESET_NF,
    TOTAL_NF
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