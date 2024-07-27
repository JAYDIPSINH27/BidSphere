/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* external imports */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import withNavbar from '@shared/hoc/withNavBar';
/* services */
import { getQuestionById } from '../../service/NestedComment.service';
/* styles */
import styles from './question.module.scss';
/* slices */
import { setQuestion } from './slice/questionsSlice';

const Question = () => {
  const { qId } = useParams();
  const dispatch = useDispatch();
  const question = useSelector(state => state.QuesnAndAnswerReducer.NestedCommentReducer.QuestionReducer.question);
  const {
    qTitle = '',
    qDesc = '',
    timeStamp = '',
  } = question || {};

  useEffect(() => {
    getQuestionById({ qId })
      .then(({ data: question }) => {
        dispatch(setQuestion(question));
      })
      .catch((err) => {
        message.error(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.questionContainer}>
        {/* title */}
        <div
          className={styles.qTitle}
        >
          <p>{qTitle}</p>
          <div
            className={styles.qTimeStamp}
          >
            <span className={styles.qTimeStamp__asked}>Asked</span>
            <span>{moment(timeStamp).fromNow()}</span>
          </div>
        </div>

        {/* description */}
        <div
          className={styles.qDesc}
        >
          <p>{qDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default withNavbar(Question);
