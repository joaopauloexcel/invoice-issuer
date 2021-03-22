import createConnect from 'redux-connect-standalone';
import {store} from '../store/index';

export const connect = createConnect(store);