import React from "react";
import styled from "styled-components";
import { useTransaction } from "../../contexts/transactionContext";
import { useBudget } from "../../contexts/budgetContext";
import PlannedMonthly from "./PlannedMonthly";
import ActualMonthly from "./ActualMonthly";
import { colorSet } from "../../styles/Colors";

const Dashboard = () => {
  const { allTransactions } = useTransaction();
  const { userBudget } = useBudget();

  const decemberTransaction = allTransactions.filter((transaction) => {
    return transaction.date.includes("2020-12");
  });

  const januaryTransaction = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-01");
  });

  return (
    <Wrapper>
      <Title>OVERVIEW</Title>
      <ChartWrapper>
        <Title>December 🎄</Title>
        <ChartsContainer>
          {userBudget.map((budget) => {
            if (budget.month === "december") {
              return (
                <>
                  <PlannedMonthly budget={budget} />
                  <ActualMonthly transactions={decemberTransaction} />
                </>
              );
            }
          })}
        </ChartsContainer>
      </ChartWrapper>

      <ChartWrapper>
        <Title>January ☃️</Title>
        <ChartsContainer>
          {userBudget.map((budget) => {
            if (budget.month === "january") {
              return (
                <>
                  <PlannedMonthly budget={budget} />
                  <ActualMonthly transactions={januaryTransaction} />
                </>
              );
            }
          })}
        </ChartsContainer>
      </ChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border: 2px solid ${colorSet.primaryGrey};
`;

export default Dashboard;
