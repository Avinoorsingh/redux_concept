import {combineReducers} from 'redux';
import { productReducer,selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts:productReducer,//any key: your reducer
    product:selectedProductReducer,//product is the which we are using in state.product
});

export default reducers;
