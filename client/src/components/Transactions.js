import React from "react";
import styled from "styled-components";
import { colorSet } from "../styles/Colors";
import { MdAddCircleOutline } from "react-icons/md";

const Transactions = () => {
  return (
    <Wrapper>
      <ActionContainer>
        <Action>
          <ActionTitle>Add Expense</ActionTitle>
          <MdAddCircleOutline />
        </Action>
        <Action>
          <ActionTitle>Add Expense</ActionTitle>
          <MdAddCircleOutline />
        </Action>
      </ActionContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  background-color: black;
`;

const ActionContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const ActionTitle = styled.h2`
  color: white;
  padding-bottom: 5px;
`;

export default Transactions;
