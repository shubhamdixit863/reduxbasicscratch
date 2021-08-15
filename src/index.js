import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from  "redux";
import commonReducers from './REDUCERS';
import  {Provider} from "react-redux";  // Provider acts as a bridge betweem your react app and the redux store and pass the store data from redux store to the react component

const store=createStore(commonReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );   // creating a store here --->  store keyword will hold the reux store of our app


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);
