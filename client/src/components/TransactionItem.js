import React from "react";
import styled, { css } from "styled-components";
import { colorSet } from "../styles/Colors";

const TransactionItem = ({ item }) => {
  const isIncome = item.type === "income";
  return (
    <Wrapper>
      <TransactionType>
        Type: <Color>{item.type.toUpperCase()}</Color>
      </TransactionType>
      <TransactionID>Transaction ID: #{item.id}</TransactionID>
      <TransactionAmount>Amount: ${item.amount}</TransactionAmount>
      {item.category !== "income" && (
        <TransactionCategory>Category: {item.category}</TransactionCategory>
      )}

      <TransactionDate>Date: {item.date}</TransactionDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid ${colorSet.primaryYellow};
`;

const TransactionID = styled.p`
  margin: 8px 0;
`;

const TransactionAmount = styled.p`
  margin: 8px 0;
`;

const TransactionCategory = styled.p`
  margin: 8px 0;
`;

const TransactionDate = styled.p`
  margin: 8px 0;
`;

const TransactionType = styled.h1`
  margin: 8px 0;
`;

const Color = styled.span`
  // WIP
  color: ${(isIncome) => (isIncome ? "darkred" : "limegreen")};
`;

export default TransactionItem;
