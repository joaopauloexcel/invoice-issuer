import Reducers from "../reducer/index";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const store = createStore(Reducers, applyMiddleware(thunk));