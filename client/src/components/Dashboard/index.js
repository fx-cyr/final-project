import React from "react";
import styled from "styled-components";
import { useTransaction } from "../../contexts/transactionContext";

const Dashboard = () => {
  const { allTransactions } = useTransaction();
  const amountArr = allTransactions.map((transaction) => {
    if (transaction.type === "income") {
      return transaction.amount * 1;
    } else {
      return transaction.amount * -1;
    }
  });
  const total = amountArr.reduce((a, b) => a + b, 0);

  return <Wrapper>{total}</Wrapper>;
};

const Wrapper = styled.div`
  color: white;
`;

export default Dashboard;
