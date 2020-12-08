"use strict";
const admin = require("firebase-admin");

require("dotenv").config();

console.log(process.env.FIREBASE_PROJECT_ID);

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
  }),
  databaseURL: process.env.FB_DATABASE_URL,
});

const { v4: uuidv4 } = require("uuid");
const { transactions, budget } = require("./data");

// Handler function for the endpoint that retrieves all transaction 👇
const getAllTransactions = (req, res) => {
  if (transactions.length > 0) {
    res.status(200).json({
      status: 200,
      data: transactions,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "No transactions",
    });
  }
};

// Handler function for the endpoint that adds a transaction 👇
const addTransaction = (req, res) => {
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
};

// Handler function for the endpoint that adds a budget 👇
const addBudget = (req, res) => {
  const {
    id,
    housing,
    transportation,
    food,
    utilities,
    medical,
    personal,
    leasure,
    other,
    plannedIncome,
    month,
  } = req.body;
  if (
    month === undefined ||
    housing === undefined ||
    transportation === undefined ||
    food === undefined ||
    utilities === undefined ||
    medical === undefined ||
    personal === undefined ||
    leasure === undefined ||
    other === undefined ||
    plannedIncome === undefined
  ) {
    res.status(400).json({
      status: 400,
      data: req.body,
      message:
        "Missing information - fill out every field of the budget. If you're not budgeting for a specific catgeory, input 0.",
    });
  }
  let data = req.body;
  budget.push(data);
  res.status(201).json({
    status: 201,
    data: data,
    message: "Budget successfully set!",
  });
};

const getBudget = (req, res) => {
  if (budget.length > 0) {
    res.status(200).json({
      status: 200,
      data: budget,
      message: "Budget retrieved",
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "No budget was found",
    });
  }
};

module.exports = { getAllTransactions, addTransaction, addBudget, getBudget };
