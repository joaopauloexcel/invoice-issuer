import React from "react";
import * as ReactDOM from 'react-dom';
import {Router, Route} from "react-router";
import {Provider} from "react-redux";
import store from "./history/index"
import App from "./App";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </Router>,
    document.getElementById('app')
);