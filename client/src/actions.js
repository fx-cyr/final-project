export const requestAllTransactions = () => ({
  type: "REQUEST_ALL_TRANSACTIONS",
});

export const addTransactionItem = (item) => ({
  type: "ADD_TRANSACTION",
  item,
});
