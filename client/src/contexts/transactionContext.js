import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";

export const TransactionContext = createContext({ allTransactions: [] });

export const TransactionProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/db/transaction/${currentUser.email}`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (json.data) {
            setAllTransactions(json.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setAllTransactions]);

  return (
    <TransactionContext.Provider
      value={{
        allTransactions,
        setAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  return useContext(TransactionContext);
};
