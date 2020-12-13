"use strict";
const admin = require("firebase-admin");
const { MongoClient, ObjectId } = require("mongodb");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const { v4: uuidv4 } = require("uuid");
const { transactions, budget } = require("./data");

// Handler function for the endpoint that adds a user transaction to collection transactions👇
const dbAddTransaction = async (req, res) => {
  const { id, amount, category, date } = req.body;
  if (amount === undefined || category === undefined || date === undefined) {
    res.status(400).json({
      status: 400,
      data: req.body,
      message: "Missing information - transaction not processed",
    });
    return;
  }
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("savester");
    const result = await db.collection("transactions").insertOne(req.body);
    assert.strictEqual(1, result.insertedCount);
    if (result) {
      return res.status(201).json({
        status: 201,
        data: req.body,
      });
    }
    return res.status(500).json({
      status: 500,
      message: "Failed request to add transaction",
    });
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};

// Handler function for the endpoint that deletes a user transaction 👇
const dbDeleteTransaction = async (req, res) => {
  const { _id } = req.params;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("savester");
    await db.collection("transactions").deleteOne({ _id: ObjectId(_id) });

    return res.status(200).json({
      status: 200,
      message: `${_id} successfully deleted`,
      data: { _id: _id },
    });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: 500,
      message: "Failed to delete",
    });
  }
};

// Handler function for the endpoint that retrieves all the user transactions 👇
const dbGetAllTransaction = async (req, res) => {
  const { email } = req.params;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("savester");
    const result = await db

      .collection("transactions")
      .find({ userEmail: email })
      .toArray();
    if (result.length > 0) {
      return res.status(200).json({
        status: 200,
        message: "Transactions retrieved",
        data: result,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "No transactions retrieved",
      });
    }
  } catch (err) {
    console.log(err.stack);
  }
};

// Handler function for the endpoint that adds a budget TO DATABASE 👇
const dbAddBudget = async (req, res) => {
  const {
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
    return;
  }
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("savester");
    const result = await db.collection("budgets").insertOne(req.body);
    assert.strictEqual(1, result.insertedCount);
    if (result) {
      return res.status(201).json({
        status: 201,
        data: req.body,
      });
    }
    return res.status(500).json({
      status: 500,
      message: "Failed request to add budget",
    });
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};

// Handler function for the endpoint that retrieves all user budgets FROM DATABASE 👇
const dbGetAllBudget = async (req, res) => {
  const { email } = req.params;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("savester");
    const result = await db
      .collection("budgets")
      .find({ userEmail: email })
      .toArray();
    if (result.length > 0) {
      return res.status(200).json({
        status: 200,
        message: "Budgets retrieved",
        data: result,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "No budget retrieved",
      });
    }
  } catch (err) {
    console.log(err.stack);
  }
};

// Handler function for the endpoint that deletes a user budget FROM DATABASE 👇
const dbUpdateBudget = async (req, res) => {
  const { _id } = req.params;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("savester");
    await db.collection("budgets").deleteOne({ _id: ObjectId(_id) });

    return res.status(200).json({
      status: 200,
      message: `${_id} successfully deleted`,
      data: { _id: _id },
    });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: 500,
      message: "Failed to delete",
    });
  }
};

module.exports = {
  dbAddTransaction,
  dbGetAllTransaction,
  dbAddBudget,
  dbGetAllBudget,
  dbDeleteTransaction,
  dbUpdateBudget,
};
