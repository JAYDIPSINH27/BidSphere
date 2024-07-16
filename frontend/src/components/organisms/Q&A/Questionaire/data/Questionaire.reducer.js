import { combineReducers } from '@reduxjs/toolkit';
import QuestionaireSlice from './questionaire.slice';
import ModelWrapperSlice from '../sections/ModalWrapper/slice/modalSlice';

const QuestionaireReducer = combineReducers({
  QuestionaireReducer: QuestionaireSlice,
  ModelWrappereReducer: ModelWrapperSlice,
});

export default QuestionaireReducer;
