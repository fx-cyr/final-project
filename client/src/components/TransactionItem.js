import React from "react";
import styled, { css } from "styled-components";
import { colorSet } from "../styles/Colors";

const TransactionItem = ({ item }) => {
  const isIncome = item.type === "income";
  const handleDeletion = () => {
    fetch(`/api/db/transaction/${item._id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.alert("Transaction deleted");
  };
  return (
    <Wrapper>
      <BtnWrapper>
        <DeleteBtn onClick={handleDeletion}>DELETE</DeleteBtn>
      </BtnWrapper>

      <TransactionType>
        {item.category === "income" ? (
          <>
            Type: <Green>{item.type.toUpperCase()}</Green>
          </>
        ) : (
          <>
            Type: <Red>{item.type.toUpperCase()}</Red>
          </>
        )}
      </TransactionType>
      <TransactionAmount>Amount: ${item.amount}</TransactionAmount>
      {item.category !== "income" && (
        <TransactionCategory>Category: {item.category}</TransactionCategory>
      )}
      <TransactionDate>Date: {item.date}</TransactionDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  margin: 20px;
  padding: 20px;
  border: 2px solid ${colorSet.primaryYellow};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Red = styled.span`
  color: ${colorSet.primaryRed};
`;

const Green = styled.span`
  color: ${colorSet.primaryGreen};
`;

const DeleteBtn = styled.button`
  text-align: right;
  color: ${colorSet.primaryGrey};
  background-color: transparent;
  border: 1px solid ${colorSet.primaryGrey};
`;
export default TransactionItem;
