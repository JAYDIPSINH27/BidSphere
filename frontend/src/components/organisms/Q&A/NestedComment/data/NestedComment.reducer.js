import { combineReducers } from '@reduxjs/toolkit';
import CommentSlice from '../sections/comment/slice/commentsSlice';
import QuestionSlice from '../sections/question/slice/questionsSlice';

const NestedCommentReducer = combineReducers({
  CommentReducer: CommentSlice,
  QuestionReducer: QuestionSlice,
});

export default NestedCommentReducer;
