const express = require("express");
const app = express();
const PORT = 9414;
const bodyParser = require("body-parser");
const { transactions } = require("./data");
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "hello world",
  });
});

app.post("/api/transactions", (req, res) => {
  const { id, amount, category, date } = req.body;
  if (amount === undefined || category === undefined || date === undefined) {
    res.status(400).json({
      status: 400,
      data: req.body,
      message: "Missing information - transaction not processed",
    });
  }
  let data = req.body;
  data.id = uuidv4();
  transactions.push(data);
  res.status(201).json({
    status: 201,
    data: data,
    message: "Transaction successfully added!",
  });
});

app.get("/api/transactions", (req, res) => {
  const allTransactions = transactions;
  if (allTransactions.length > 0) {
    res.status(200).json({
      status: 200,
      data: allTransactions,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "No transactions",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
