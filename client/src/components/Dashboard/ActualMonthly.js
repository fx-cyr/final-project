import React from "react";
import styled from "styled-components";
import { PieChart, Pie } from "recharts";
import { colorSet } from "../../styles/Colors";
import { useHistory } from "react-router-dom";

const ActualMonthly = ({ transactions }) => {
  const history = useHistory();
  let actualIncome = [];
  let actualExpenses = [];

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      actualIncome.push(Number(transaction.amount));
    } else {
      actualExpenses.push(Number(transaction.amount));
    }
  });

  const sumActualIncome = actualIncome.reduce((a, b) => a + b, 0);
  const sumActualExpenses = actualExpenses.reduce((a, b) => a + b, 0);

  const budgetPieData = [
    { name: "Expenses", value: sumActualExpenses },
    {
      name: "Savings",
      value: sumActualIncome - sumActualExpenses,
    },
  ];

  return (
    <PlannedBox>
      <PlannedTitle>Actual</PlannedTitle>
      <PieChart width={500} height={300}>
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
      </PieChart>
      <PlannedDesc>Income: ${sumActualIncome.toFixed(2)}</PlannedDesc>
      <PlannedDesc>
        Expenses: {((sumActualExpenses / sumActualIncome) * 100).toFixed(2)}%
      </PlannedDesc>
      <PlannedDesc>
        Savings:{" "}
        {(
          ((sumActualIncome - sumActualExpenses) / sumActualIncome) *
          100
        ).toFixed(2)}
        %
      </PlannedDesc>
    </PlannedBox>
  );
};

const PlannedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 5px 10px;
`;
const PlannedTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;

const PlannedDesc = styled.div`
  font-size: 18px;
  padding: 7px 0;
`;

const AddBtn = styled.button`
  margin-top: 20px;
  color: white;
  width: 150px;
  background-color: transparent;
  border: 1px solid ${colorSet.primaryRed};
  &:hover {
    background-color: ${colorSet.primaryRed};
    cursor: pointer;
  }
`;

export default ActualMonthly;
