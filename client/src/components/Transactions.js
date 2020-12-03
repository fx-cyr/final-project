import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../styles/Colors";
import { MdAddCircleOutline } from "react-icons/md";
import Form from "./Form";

const Transactions = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddIncome = () => {
    window.alert("Now add income source");
  };

  const handleAddExpense = () => {
    setShowModal(true);
    console.log(showModal);
  };

  return (
    <Wrapper>
      <ActionContainer>
        <Action>
          <ActionTitle>Add Expense</ActionTitle>
          <MdAddCircleOutline
            size={40}
            style={{ color: "#F94144", cursor: "pointer" }}
            onClick={handleAddExpense}
          />
        </Action>
        <Action>
          <ActionTitle>Add Income</ActionTitle>
          <MdAddCircleOutline
            size={40}
            style={{ color: "#90BE6D", cursor: "pointer" }}
            onClick={handleAddIncome}
          />
        </Action>
      </ActionContainer>
      {showModal && <Form setShowModal={setShowModal} showModal={showModal} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  background-color: black;
  height: 100%;
`;

const ActionContainer = styled.div`
  padding: 4% 1%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 4%;
`;

const ActionTitle = styled.h2`
  color: white;
  padding-bottom: 5px;
`;

export default Transactions;
