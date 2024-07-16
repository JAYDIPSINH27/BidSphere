const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionaireSchema = new Schema({
  qTitle: {
    type: String,
    required: true,
  },
  qDesc: {
    type: String,
    required: true,
  },
  askedByUsername: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number,
    default: () => Date.now(),
  },
  totalAnswers: {
    type: Number,
    default: 0,
  }
})

exports.QuestionBank = mongoose.model('questionaire', QuestionaireSchema, 'Questions')