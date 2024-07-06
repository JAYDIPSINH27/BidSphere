import { configureStore } from '@reduxjs/toolkit';
/* reducers */
import QuesnAndAnswerReducer from '@components/organisms/Q&A/reducer/Q&A.reducer';

const store = configureStore({
  reducer: {
    QuesnAndAnswerReducer,
  },
});

export default store;
