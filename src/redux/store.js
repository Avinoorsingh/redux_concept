import {createStore} from 'redux'
import reducers from "./reducers/index";

const store=createStore(reducers,{});//combine reducers, middlewares state
 
export default store;