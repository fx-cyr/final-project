import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { transactionsReducer } from "./transactionReducer";
import { TransactionProvider } from "./contexts/transactionContext";

const store = createStore(
  transactionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
