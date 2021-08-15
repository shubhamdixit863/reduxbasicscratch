import { combineReducers } from "redux";
import counter from "./counter";


const commonReducers=combineReducers({counter:counter});


export default commonReducers;

