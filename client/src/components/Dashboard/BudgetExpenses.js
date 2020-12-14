import React from "react";
import styled from "styled-components";
import { colorSet } from "../../styles/Colors";
import { BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";

const BudgetExpenses = ({ budget }) => {
  const data = [];
  data.push(
    { name: "Housing", expenses: Number(budget.housing) },
    { name: "Transport", expenses: Number(budget.transportation) },
    { name: "Utilities", expenses: Number(budget.utilities) },
    { name: "Food", expenses: Number(budget.food) },
    { name: "Medical", expenses: Number(budget.medical) },
    { name: "Personal", expenses: Number(budget.personal) },
    { name: "Leasure", expenses: Number(budget.leasure) },
    { name: "Other", expenses: Number(budget.other) }
  );

  return (
    <>
      <Title>Monthly expenses</Title>
      <BarChart width={830} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="expenses" fill="#8884d8" />
      </BarChart>
    </>
  );
};

const Title = styled.h1`
  margin: 20px;
  font-size: 24px;
  text-align: center;
`;

export default BudgetExpenses;
