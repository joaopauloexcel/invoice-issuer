import {combineReducers} from "redux";
import {totalcardResult as cardResult} from "./cardResult";

// Combining the reducers to be imported in the store
const Reducer = combineReducers({
    cardResult
});

export default Reducer;
