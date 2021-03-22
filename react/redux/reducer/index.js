import {combineReducers} from "redux";
import {totalcardResult as cardResul} from "./cardResult";

// Combining the reducers to be imported in the store
const Reducer = combineReducers({
    cardResul
});

export default Reducer;
