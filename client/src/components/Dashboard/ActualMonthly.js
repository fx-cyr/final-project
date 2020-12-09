import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import { colorSet } from "../../styles/Colors";

const ActualMonthly = ({ transactions }) => {
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
      <PlannedTitle>ACTUAL</PlannedTitle>
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
      <PlannedDesc>Income: ${sumActualIncome}</PlannedDesc>
      <PlannedDesc>
        Expenses: {(sumActualExpenses / sumActualIncome) * 100}%
      </PlannedDesc>
      <PlannedDesc>
        Savings:{" "}
        {((sumActualIncome - sumActualExpenses) / sumActualIncome) * 100}%
      </PlannedDesc>
    </PlannedBox>
  );
};

const PlannedBox = styled.div`
  margin: 15px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const PlannedTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;

const PlannedDesc = styled.div`
  font-size: 18px;
`;

export default ActualMonthly;
