import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import { colorSet } from "../../styles/Colors";
import { useHistory } from "react-router-dom";

const PlannedMonthly = ({ budget }) => {
  const history = useHistory();
  const handleBudgetDeletion = () => {
    fetch(`/api/db/budget/${budget._id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.alert(
      `Budget for ${budget.month} succesfully deleted! Refresh the page to see changes`
    );
    history.push("/budget");
  };

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
      <PlannedTitle>Planned</PlannedTitle>
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
      </PieChart>
      <PlannedDesc>
        Income: ${Number(budget.plannedIncome).toFixed(2)}
      </PlannedDesc>
      <PlannedDesc>
        Expenses: {((budgetExpenses / budget.plannedIncome) * 100).toFixed(2)}%
      </PlannedDesc>
      <PlannedDesc>
        Savings:{" "}
        {(
          ((budget.plannedIncome - budgetExpenses) / budget.plannedIncome) *
          100
        ).toFixed(2)}
        %
      </PlannedDesc>
      <DeleteBtn onClick={handleBudgetDeletion}>Delete budget</DeleteBtn>
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

const DeleteBtn = styled.button`
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

export default PlannedMonthly;
