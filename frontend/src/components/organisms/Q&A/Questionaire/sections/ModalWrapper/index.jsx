/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Input, Button, message,
} from 'antd';
import { Editor, EditorState, RichUtils } from 'draft-js';
/* internal components */
import Modal from '@molecules/Modal';
/* utils */
import { getUserFromToken } from '@shared/utils/auth';
/* slices */
import { setDescription, setTitle, setModalVisible } from './slice/modalSlice';
/* services */
import { postQuestion } from '../../service/Questionaire.service';
/* styles */
import styles from './index.module.scss';

const ModalWrapper = ({
  title = '',
  onSubmit = () => {},
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const dispatch = useDispatch();
  const qTitle = useSelector(state => state.QuesnAndAnswerReducer.QuestionaireReducer.ModelWrappereReducer.qTitle);
  const isModalVisible = useSelector(state => state.QuesnAndAnswerReducer.QuestionaireReducer.ModelWrappereReducer.isModalVisible);
  const { name = '' } = getUserFromToken();

  const onChange = (editorStateData) => {
    setEditorState(editorStateData);
    const contentState = editorStateData.getCurrentContent();
    const text = contentState.getPlainText();
    dispatch(setDescription(text));
  };

  const handleKeyCommand = (command, editorStateData) => {
    const newState = RichUtils.handleKeyCommand(editorStateData, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleCancel = () => {
    dispatch(setModalVisible(false));
  };

  const resetData = () => {
    dispatch(setModalVisible(false));
    dispatch(setTitle(''));
    dispatch(setDescription(''));
  };

  const handleSave = () => {
    const payload = {
      qTitle,
      qDesc: editorState.getCurrentContent().getPlainText(),
      askedByUsername: name,
    };
    postQuestion(payload)
      .then(() => {
        onSubmit();
        resetData();
        message.success('Your question has been posted.');
      })
      .catch((err) => {
        message.error(err);
      })
      .finally(() => {
        dispatch(setModalVisible(false));
      });
  };

  return (
    <Modal
      open={isModalVisible}
      onCancel={handleCancel}
      title={title}
      className={styles.modalContainer}
      footer={[<Button key="post" onClick={handleSave}>Post</Button>]}
    >
      <div className={styles.postCreationContainer}>
        <section>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            value={qTitle}
            onChange={e => dispatch(setTitle(e.target.value))}
          />
        </section>
        <section>
          <label htmlFor="description">Description</label>
          <div className={styles.editorContainer}>
            <Editor
              editorState={editorState}
              onChange={onChange}
              handleKeyCommand={handleKeyCommand}
            />
          </div>
        </section>
      </div>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  title: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalWrapper;
