import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
export const BudgetContext = createContext({ userBudget: [] });

export const BudgetProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [userBudget, setUserBudget] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/db/budget/${currentUser.email}`, {
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
    }
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
