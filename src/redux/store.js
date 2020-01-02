import {createStore} from 'redux';
import reducer from './reducer';

export default createStore(reducer);

// for multiple reducers
// const rootReducer = combineReducers({
    //reducer,
    //*other reducer goes here*
//})

//export default createStore(rootReducer)