import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { transactionsReducer } from "./transactionReducer";
import { TransactionProvider } from "./contexts/transactionContext";
import { BudgetProvider } from "./contexts/budgetContext";

const store = createStore(
  transactionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BudgetProvider>
      <TransactionProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </TransactionProvider>
    </BudgetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
