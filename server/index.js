const express = require("express");
const app = express();
const PORT = 9414;
const bodyParser = require("body-parser");
const {
  getAllTransactions,
  addTransaction,
  getBudget,
  addBudget,
} = require("./handlers");
const { transactions } = require("./data");

app.use(bodyParser.json());

// Endpoint that adds a transaction 👇
app.post("/api/transactions", addTransaction);

// Endpoint that retrieves all transactions 👇
app.get("/api/transactions", getAllTransactions);

// Endpoint that retrieves the user budget👇
app.get("/api/budget", getBudget);

// Endpoint that retrieves adds budget 👇
app.post("/api/budget", addBudget);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
