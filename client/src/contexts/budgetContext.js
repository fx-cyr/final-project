import React, { createContext, useContext, useEffect, useState } from "react";

export const BudgetContext = createContext({ userbudget: [] });

export const BudgetProvider = ({ children }) => {
  const [userBudget, setUserBudget] = useState([]);

  useEffect(() => {
    fetch("/api/budget", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.data) {
          setUserBudget(json.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUserBudget]);

  return (
    <BudgetContext.Provider
      value={{
        userBudget,
        setUserBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};
