import React from "react";
import styled from "styled-components";
import { useTransaction } from "../../contexts/transactionContext";
import { useBudget } from "../../contexts/budgetContext";
import PlannedMonthly from "./PlannedMonthly";
import ActualMonthly from "./ActualMonthly";
import { colorSet } from "../../styles/Colors";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../../contexts/authContext";

const Dashboard = ({ month, setMonth }) => {
  const history = useHistory();
  const { currentUser } = useAuth();
  console.log(currentUser.email);
  const { allTransactions } = useTransaction();
  const { userBudget } = useBudget();

  const dec2020Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2020-12");
  });

  const jan2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-01");
  });

  const feb2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-02");
  });

  const mar2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-03");
  });

  const apr2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-04");
  });

  const may2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-05");
  });

  const jun2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-06");
  });

  const jul2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-07");
  });

  const aug2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-08");
  });

  const sep2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-09");
  });

  const oct2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-10");
  });

  const nov2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-11");
  });

  const dec2021Trans = allTransactions.filter((transaction) => {
    return transaction.date.includes("2021-12");
  });

  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar setMonth={setMonth} />
      </SidebarWrapper>
      <DashboardWrapper>
        {month === "" && <Title>Select a month</Title>}
        {month === "2020-12" && (
          <ChartWrapper>
            <Title>December 2020</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2020-12") {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={dec2020Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}
        {month === "2021-01" && (
          <ChartWrapper>
            <Title>January 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-01" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={jan2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-02" && (
          <ChartWrapper>
            <Title>February 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-02" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={feb2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-03" && (
          <ChartWrapper>
            <Title>March 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-03" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={mar2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-04" && (
          <ChartWrapper>
            <Title>April 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-04") {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={apr2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-05" && (
          <ChartWrapper>
            <Title>May 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-05" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={may2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-06" && (
          <ChartWrapper>
            <Title>June 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-06" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={jun2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-07" && (
          <ChartWrapper>
            <Title>July 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-07" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={jul2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-08" && (
          <ChartWrapper>
            <Title>August 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-08" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={aug2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-09" && (
          <ChartWrapper>
            <Title>September 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-09" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={sep2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-10" && (
          <ChartWrapper>
            <Title>October 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-10" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={oct2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-11" && (
          <ChartWrapper>
            <Title>November 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-11" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={nov2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}

        {month === "2021-12" && (
          <ChartWrapper>
            <Title>December 2021</Title>
            <ChartsContainer>
              {userBudget.map((budget) => {
                if (budget.month === "2021-12" || budget.lenght > 0) {
                  return (
                    <>
                      <PlannedMonthly budget={budget} />
                      <ActualMonthly transactions={dec2021Trans} />
                    </>
                  );
                }
              })}
            </ChartsContainer>
          </ChartWrapper>
        )}
      </DashboardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const SidebarWrapper = styled.div`
  width: 15%;
  margin: 0 15px;
`;

const DashboardWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  padding-bottom: 32px;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const BudgetCreation = styled.button`
  margin: 5%;
  color: white;
  font-size: 18px;
  border: 2px solid ${colorSet.primaryGreen};
  background: transparent;

  &:hover {
    background-color: ${colorSet.primaryGreen};
    cursor: pointer;
  }
`;

export default Dashboard;
