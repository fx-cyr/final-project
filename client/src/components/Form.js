import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { expenseCategories } from "../data";
import { colorSet } from "../styles/Colors";
import Modal from "react-modal";

const Form = ({ showModal }) => {
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  console.log(showModal);

  const handleChange = (state, ev) => {
    state(ev.target.value);
  };

  const handleSubmit = () => {
    setIsFormValid(true);
  };

  let checkIfValid = (ev) => {
    ev.preventDefault();
    if (!expenseAmount || Number(expenseAmount) < 0.01) {
      setErrorMsg("expenseAmount_Err");
      return;
    }
    if (!expenseCategory) {
      setErrorMsg("expenseCategory_Err");
      return;
    }
    if (!expenseDate) {
      setErrorMsg("expenseDate_Err");
      return;
    }
    setErrorMsg(null);
    handleSubmit();
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        style={{
          overlay: {
            zIndex: 1001,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#000000",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <Wrapper>
          <Title>Add new expense</Title>
          <FormWrapper>
            <Label>
              Amount ($):{" "}
              <input
                type="number"
                min="0"
                step="0.01"
                onChange={(ev) => {
                  handleChange(setExpenseAmount, ev);
                }}
              />{" "}
            </Label>
            <Label for="categories">
              Category:
              <select
                id="categories"
                name="categories"
                onChange={(ev) => {
                  handleChange(setExpenseCategory, ev);
                  console.log(expenseCategory);
                }}
              >
                <option disabled>Select expense category</option>
                {expenseCategories.map((category) => {
                  return (
                    <option value={`${category.id}`}>{category.name}</option>
                  );
                })}
              </select>
            </Label>
            <Label>
              Date:{" "}
              <input
                type="date"
                onChange={(ev) => {
                  handleChange(setExpenseDate, ev);
                }}
              />
            </Label>
            {errorMsg === "expenseAmount_Err" && (
              <ErrorBox>
                Sure, you want to log an expense without entering a valid
                expense amount.
              </ErrorBox>
            )}
            {errorMsg === "expenseCategory_Err" && (
              <ErrorBox>
                Help us help you. Select a category for us to update to your
                budget!
              </ErrorBox>
            )}
            {errorMsg === "expenseDate_Err" && (
              <ErrorBox>You know what would help? A valid date.</ErrorBox>
            )}
            <Button type="submit" onClick={checkIfValid}>
              Submit
            </Button>
          </FormWrapper>
        </Wrapper>
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  margin: 20px;
  padding: 10px;
`;

const Title = styled.h1`
  color: white;
`;

const FormWrapper = styled.form`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Label = styled.label`
  color: white;
  padding: 10px;
`;

const Button = styled.button``;

const ErrorBox = styled.div`
  text-align: center;
  background-color: #f94144;
  color: white;
  margin: 15px 0;
  width: 50%;
`;

export default Form;
