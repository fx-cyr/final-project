import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import { colorSet } from "../../styles/Colors";

const PlannedMonthly = ({ budget }) => {
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
      <PlannedTitle>PLANNED</PlannedTitle>
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
        Expenses: {(budgetExpenses / budget.plannedIncome) * 100}%
      </PlannedDesc>
      <PlannedDesc>
        Savings:{" "}
        {((budget.plannedIncome - budgetExpenses) / budget.plannedIncome) * 100}{" "}
        %
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

export default PlannedMonthly;
