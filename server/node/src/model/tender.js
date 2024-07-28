// Author: Dheemanth Rajendra Prasad Kumawat
const mongoose = require("mongoose");
const { Schema } = mongoose;

const tenderSchema = new Schema({
  tenderNumber: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  issuerId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  documents: {
    type: Array,
    default: [],
  },
  bids: {
    type: Array,
    default: [],
  },
  statistics: {
    bidsCount: {
      type: Number,
      default: 0,
    },
    averageBid: {
      type: Number,
      default: 0,
    },
  },
});

const Tender = mongoose.model("Tender", tenderSchema, "Tenders");

module.exports = Tender;
