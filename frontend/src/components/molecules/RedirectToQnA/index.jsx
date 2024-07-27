/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import supportLogo from '../../../../public/supportLogo.webp';
import styles from './RedirectToQnA.module.scss';

const RedirectToQnA = () => {
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate('/q&a');
  };
  return (
    <div className={styles.redirectContainer}>
      <section className={styles.actionQuesnSection}>{'Can\'t find what you are looking for?'}</section>
      <section className={styles.callToActionSection}>
        <div className={styles.callToAction}>We would like you to ask it in our Q&A forum.</div>
        <div className={styles.logoContainer}>
          <div
            className={styles.supportLogoWrapper}
            role="button"
            tabIndex={0}
          >
            <img
              onClick={onLogoClick}
              className={styles.supportLogo}
              src={supportLogo}
              alt="support logo"
            />
          </div>
          <div className={styles.arrowWrapper}>
            <img
              src="https://cdn.prod.website-files.com/659415b36df8ea43c38776dc/65aef39452411d9e2b4209f6_cta-arrow.svg"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RedirectToQnA;
