import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import bookmarksReducer from "./redux/reducers";
// import rootReducer from './redux/reducers';
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
// import configureStore from "./redux/store/configureStore";

const store = createStore(
  bookmarksReducer,
  /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// // create provider and wrap app to access anywhere in the app

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

