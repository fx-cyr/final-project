import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { TransactionProvider } from "./contexts/transactionContext";
import { BudgetProvider } from "./contexts/budgetContext";
import { AuthProvider } from "./contexts/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BudgetProvider>
        <TransactionProvider>
          <App />
        </TransactionProvider>
      </BudgetProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
