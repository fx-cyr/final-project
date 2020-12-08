import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../../styles/Colors";
import { useBudget } from "../../contexts/budgetContext";
import { months } from "../../data";

const Budget = () => {
  const { userBudget } = useBudget();
  const [isFormValid, setIsFormValid] = useState(false);
  const [budgetMonth, setBudgetMonth] = useState("");
  const [budgetHousing, setBudgetHousing] = useState(0);
  const [budgetTransportation, setBudgetTransportation] = useState(0);
  const [budgetFood, setBudgetFood] = useState(0);
  const [budgetUtilities, setBudgetUtilities] = useState(0);
  const [budgetMedical, setBudgetMedical] = useState(0);
  const [budgetPersonal, setBudgetPersonal] = useState(0);
  const [budgetLeasure, setBudgetLeasure] = useState(0);
  const [budgetOther, setBudgetOther] = useState(0);
  const [plannedIncome, setPlannedIncome] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (state, ev) => {
    state(ev.target.value);
  };

  const handleSubmit = () => {
    setIsFormValid(true);
    fetch("/api/budget", {
      method: "post",
      body: JSON.stringify({
        housing: budgetHousing,
        transportation: budgetTransportation,
        food: budgetFood,
        utilities: budgetUtilities,
        medical: budgetMedical,
        personal: budgetPersonal,
        leasure: budgetLeasure,
        other: budgetOther,
        plannedIncome: plannedIncome,
        month: budgetMonth,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        userBudget.push(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let checkIfValid = (ev) => {
    ev.preventDefault();
    if (!budgetMonth) {
      setErrorMsg("missing_month");
      return;
    }
    if (!budgetHousing || Number(budgetHousing) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetTransportation || Number(budgetTransportation) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetFood || Number(budgetFood) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetUtilities || Number(budgetUtilities) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetMedical || Number(budgetMedical) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetPersonal || Number(budgetPersonal) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetLeasure || Number(budgetLeasure) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!budgetOther || Number(budgetOther) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    if (!plannedIncome || Number(plannedIncome) < 0) {
      setErrorMsg("missing_amount");
      return;
    }
    setErrorMsg(null);
    handleSubmit();
  };

  return (
    <Wrapper>
      <Title>Plan your expenses</Title>
      <Description>
        Allocate money on each expense these expense categories! If you're not
        planning on allocating money for a specific expense, fill the field with
        a big 0.
      </Description>
      <FormWrapper>
        {/* DRY VERSION FOR FORM LOGIC 👇 */}

        {/* {expenseCategories.map((expense) => {
          let budgetSetter = expense.setter;
          return (
            <Label>
              {expense.name} ($):{" "}
              <input
                type="number"
                min="0"
                step="0.01"
               onChange={(ev) => { 
                  handleChange(budgetSetter, ev);
                }}
              />{" "}
            </Label>
          );
        })} */}
        <CategoryContainer>
          <Label for="categories">
            Choose month:
            <select
              onChange={(ev) => {
                handleChange(setBudgetMonth, ev);
              }}
            >
              <option disabled>Select month</option>
              {months.map((month) => {
                return <option value={`${month.id}`}>{month.name}</option>;
              })}
            </select>
          </Label>
          <BudgetDisplay>{budgetMonth.toUpperCase()}</BudgetDisplay>
        </CategoryContainer>

        {/* Housing setter  👇*/}
        <CategoryContainer>
          <Label>
            Housing ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetHousing, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetHousing}</BudgetDisplay>
        </CategoryContainer>

        {/* Transportation setter  👇*/}
        <CategoryContainer>
          <Label>
            Transportation ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetTransportation, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetTransportation}</BudgetDisplay>
        </CategoryContainer>

        {/* Food setter  👇*/}
        <CategoryContainer>
          <Label>
            Food ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetFood, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetFood}</BudgetDisplay>
        </CategoryContainer>

        {/* Utilities setter  👇*/}
        <CategoryContainer>
          <Label>
            Utilities ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetUtilities, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetUtilities}</BudgetDisplay>
        </CategoryContainer>

        {/* Medical setter  👇*/}
        <CategoryContainer>
          <Label>
            Medical ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetMedical, ev);
              }}
            />{" "}
          </Label>
        </CategoryContainer>

        {/* Personal setter  👇*/}
        <CategoryContainer>
          <Label>
            Personal ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetPersonal, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetPersonal}</BudgetDisplay>
        </CategoryContainer>

        {/* Leasure setter  👇*/}
        <CategoryContainer>
          <Label>
            Leasure ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetLeasure, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetLeasure}</BudgetDisplay>
        </CategoryContainer>

        {/* Other setter  👇*/}
        <CategoryContainer>
          <Label>
            Other ($):{" "}
            <input
              type="number"
              min="0"
              step="0.01"
              onChange={(ev) => {
                handleChange(setBudgetOther, ev);
              }}
            />{" "}
          </Label>
          <BudgetDisplay>${budgetOther}</BudgetDisplay>
        </CategoryContainer>

        {errorMsg === "missing_amount" && (
          <ErrorBox>Please log an amount for all fields.</ErrorBox>
        )}

        {errorMsg === "missing_month" && (
          <ErrorBox>Please enter the month you want to budget for</ErrorBox>
        )}

        <Title>Plan your expenses</Title>
        <Description>
          Allocate money on each expense these expense categories! If you're not
          planning on allocating money for a specific expense, fill the field
          with a big 0.
        </Description>
        <FormWrapper>
          <CategoryContainer>
            <Label>
              Planned monthly income ($):{" "}
              <input
                type="number"
                min="0"
                step="0.01"
                onChange={(ev) => {
                  handleChange(setPlannedIncome, ev);
                }}
              />{" "}
            </Label>
            <BudgetDisplay>${plannedIncome}</BudgetDisplay>
          </CategoryContainer>
        </FormWrapper>

        <Button type="submit" onClick={checkIfValid}>
          Submit
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 30px 0;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 8px 0;
  text-align: center;
  line-height: 25px;
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

const BudgetDisplay = styled.div`
  color: ${colorSet.primaryYellow};
  margin-top: 13px;
`;

const CategoryContainer = styled.div`
  display: flex;
`;
export default Budget;
