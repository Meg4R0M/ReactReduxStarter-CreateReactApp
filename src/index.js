import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/app";
import reducers from "./reducers";
import { BrowserRouter } from "react-router-dom";
import { actionCounter } from './middlewares/action-counter'

const invariant = require("redux-immutable-state-invariant").default();
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    actionCounter,
    invariant
)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
registerServiceWorker();