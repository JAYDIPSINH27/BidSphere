import { combineReducers } from '@reduxjs/toolkit';
import NestedCommentReducer from '../NestedComment/data/NestedComment.reducer';
import QuestionaireReducer from '../Questionaire/data/Questionaire.reducer';

const QuesnAndAnswerReducer = combineReducers({
  NestedCommentReducer,
  QuestionaireReducer,
});

export default QuesnAndAnswerReducer;
