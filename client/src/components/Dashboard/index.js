import React from "react";
import styled from "styled-components";
import { useTransaction } from "../../contexts/transactionContext";
import { useBudget } from "../../contexts/budgetContext";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import { colorSet } from "../../styles/Colors";

const Dashboard = () => {
  const { allTransactions } = useTransaction();
  const { userBudget } = useBudget();
  const transactionArr = allTransactions.map((transaction) => {
    if (transaction.type === "income") {
      return transaction.amount * 1;
    } else {
      return transaction.amount * -1;
    }
  });

  const totalTransaction = transactionArr.reduce((a, b) => a + b, 0);

  return (
    <Wrapper>
      <Title>OVERVIEW</Title>
      <ChartsContainer>
        {userBudget.map((budget) => {
          const budgetExpenses =
            Number(budget.housing) +
            Number(budget.transportation) +
            Number(budget.food) +
            Number(budget.utilities) +
            Number(budget.medical) +
            Number(budget.personal) +
            Number(budget.leasure) +
            Number(budget.other);
          const budgetPieData = [
            { name: "Expenses", value: budgetExpenses },
            {
              name: "Savings",
              value: Number(budget.plannedIncome) - budgetExpenses,
            },
          ];
          return (
            <PlannedBox>
              <PlannedTitle>
                Planned for <Capitalize>{budget.month}</Capitalize>
              </PlannedTitle>
              <PieChart width={300} height={300}>
                <Pie
                  dataKey="value"
                  nameKey="name"
                  isAnimationActive={false}
                  data={budgetPieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill={colorSet.primaryYellow}
                  label={(budgetPieData) => budgetPieData.name}
                />
                <Tooltip />
              </PieChart>
              <PlannedDesc>Income: ${Number(budget.plannedIncome)}</PlannedDesc>
              <PlannedDesc>
                Expenses: $
                {Number(budget.housing) +
                  Number(budget.transportation) +
                  Number(budget.food) +
                  Number(budget.utilities) +
                  Number(budget.medical) +
                  Number(budget.personal) +
                  Number(budget.leasure) +
                  Number(budget.other)}
              </PlannedDesc>
            </PlannedBox>
          );
        })}
      </ChartsContainer>
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
`;

const PlannedBox = styled.div`
  margin: 15px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const PlannedTitle = styled.div`
  font-size: 24px;
`;

const PlannedDesc = styled.div`
  font-size: 18px;
`;

const Capitalize = styled.span`
  text-transform: capitalize;
`;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Dashboard;
