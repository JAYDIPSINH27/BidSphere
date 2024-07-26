/* external imports */
import React, { useEffect } from 'react';
import { message } from 'antd';
import cx from 'classnames';
import moment from 'moment';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
/* internal components */
import Button from '@atoms/button';
import withNavbar from '@shared/hoc/withNavBar';
import ModalWrapper from './sections/ModalWrapper';
import { setquestionData } from './data/questionaire.slice';
import { setModalVisible } from './sections/ModalWrapper/slice/modalSlice';
/* styles */
import styles from './Questionaire.module.scss';
/* services */
import { getAllQuestions } from './service/Questionaire.service';

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const questionData = useSelector(
    state => state.QuesnAndAnswerReducer.QuestionaireReducer.QuestionaireReducer.questionData,
  );
  const isModalVisible = useSelector(
    state => state.QuesnAndAnswerReducer.QuestionaireReducer.ModelWrappereReducer.isModalVisible,
  );

  useEffect(() => {
    fetchQuestionData();
  }, []);

  const fetchQuestionData = () => {
    getAllQuestions()
      .then(({ data }) => {
        dispatch(setquestionData(data));
      })
      .catch((err) => {
        message.error(err);
      });
  };

  const handleButtonClick = () => {
    dispatch(setModalVisible(true));
  };

  const handleQuestionClick = (questionId) => {
    navigate(`${location.pathname}/${questionId}`);
  };

  return (
    <>
      <div className={styles.questions}>
        <div className={styles.topQuestions}>
          <div>Q <sub style={{ bottom: 'unset' }}>&</sub> A</div>
          <Button
            title="Ask a Question"
            className={styles.askButton}
            onClick={handleButtonClick}
          >Ask a Question
          </Button>
        </div>
        <div className={styles.questionList}>
          {(questionData || []).map((question) => {
            const {
              _id: qId = '',
              qTitle = '',
              qDesc = '',
              timeStamp = 0,
              askedByUsername = '',
              totalAnswers = 0,
            } = question || {};

            return (
              <div
                key={qId}
                role="button"
                tabIndex={0}
                className={styles.questionContainer}
                onClick={() => handleQuestionClick(qId)}
              >
                <div className={styles.authorSection}>
                  <FaUser className={styles.icon} />
                  <span className={styles.authorName}>{askedByUsername}</span>
                  <span className={styles.created}>asked {moment(timeStamp).fromNow()}</span>
                  <span
                    className={cx(styles.totalAnswers, {
                      [styles.noAnswers]: totalAnswers === 0,
                      [styles.hasAnswers]: totalAnswers > 0,
                    })}
                  >
                    {totalAnswers} Answers
                  </span>
                </div>
                <div className={styles.questionContent}>
                  <div className={styles.questionTitle}>{qTitle}</div>
                  <div className={styles.questionDescription}>{qDesc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isModalVisible && (
        <ModalWrapper title="Ask a Question" onSubmit={fetchQuestionData} />
      )}
    </>
  );
};

export default withNavbar(Questions);
