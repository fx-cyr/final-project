const express = require("express");
const app = express();
const PORT = 9414;
const bodyParser = require("body-parser");
const {
  dbAddTransaction,
  dbGetAllTransaction,
  dbAddBudget,
  dbGetAllBudget,
  dbDeleteTransaction,
  dbUpdateBudget,
} = require("./handlers");
const { transactions } = require("./data");

app.use(bodyParser.json());

// Endpoint that adds a transaction TO THE DATABASE 👇
app.post("/api/db/transaction", dbAddTransaction);

// Endpoint that deletes a transaction FROM THE DATABASE 👇
app.delete("/api/db/transaction/:_id", dbDeleteTransaction);

// Endpoint that retrieves all user transactions FROM DATABASE 👇
app.get("/api/db/transaction/:email", dbGetAllTransaction);

// Endpoint that adds a budget TO THE DATABASE 👇
app.post("/api/db/budget", dbAddBudget);

// Endpoint that retrieves all user budgets FROM DATABASE 👇
app.get("/api/db/budget/:email", dbGetAllBudget);

// Endpoint that deletes a user budget FROM DATABASE 👇
app.delete("/api/db/budget/:_id", dbUpdateBudget);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
