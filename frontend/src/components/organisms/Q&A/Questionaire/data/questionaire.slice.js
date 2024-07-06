import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionData: null,
};

export const QuestionaireSlice = createSlice({
  name: 'questionaire',
  initialState,
  reducers: {
    setquestionData: (state, action) => ({
      ...state,
      questionData: action.payload,
    }),
  },
});

export const {
  setquestionData,
} = QuestionaireSlice.actions;
export default QuestionaireSlice.reducer;
