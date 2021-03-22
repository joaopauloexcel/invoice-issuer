import React, {Component} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router";
import loadable from "react-loadable";
import Loader from "./common/Loader/Loader.js";
import {setTotalResult, setResetNf} from "./redux/action/cardList";
import history from "./history";
import { connect } from "react-redux";

// Loading components asynchronous
const Print = loadable({
    "loader": () => import("./features/print/Print"),
    "loading": Loader
});


export class App extends Component {

    componentWillMount () {}

    render () {

        return (

            <Router history={history}>
                <Switch>
                    <Route path="/print" component={Print} />
                </Switch>
            </Router>

        );

    }

}

App.propTypes = {
    "totalNf": PropTypes.number
};

export const mapStateTopProps = (state) => ({
    "totalNf": state.cardResul.totalNf,
});

export const mapDispatchToProps = (dispatch) => ({
    "setTotalResult": (value) => dispatch(setTotalResult(value)),
    "setResetNf": () => dispatch(setResetNf)
});

export default connect(mapStateTopProps,mapDispatchToProps)(App);