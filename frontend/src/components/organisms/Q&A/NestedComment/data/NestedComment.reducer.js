import { combineReducers } from '@reduxjs/toolkit';
import commentReducer from '../sections/comment/slice/commentsSlice';
import questionReducer from '../sections/question/slice/questionsSlice';

const NestedCommentReducer = combineReducers({
  commentReducer,
  questionReducer,
});

export default NestedCommentReducer;
