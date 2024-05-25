import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PaymentStatus.module.scss';
import withNavbar from '../../../shared/hoc/withNavBar';

function PaymentStatus({ status }) {
  const isSuccess = status === 'success';

  return (
    <div className={styles.paymentStatusContainer}>
      <div className={styles.paymentStatusLogo}>
        {/* <img src="/path/to/logo.png" alt="Logo" /> */}
      </div>
      <div className={styles.paymentStatusMessage}>
        <h2>
          {isSuccess ? 'Payment Successful' : 'Payment Failed'}{' '}
          <span className={isSuccess ? styles.checkmark : styles.crossmark}>
            {isSuccess ? '✅' : '❌'}
          </span>
        </h2>
        <p>{
          isSuccess
            ? 'Click the button below to return to your bid.'
            : 'Click the button below to return to your bid and try again.'
        }
        </p>
        <div className={styles.paymentStatusButtons}>
          {isSuccess ? (
            <button type="button" className={styles.btn}>
              Download Invoice
            </button>
          ) : (
            <Link to="/pricing">
              <button type="button" className={styles.btn}>
                Retry Payment
              </button>
            </Link>
          )}
          <Link to="/">
            <button type="button" className={styles.btn}>
              Back to my Bid
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

PaymentStatus.propTypes = {
  status: PropTypes.oneOf(['success', 'failure']).isRequired,
};

export default withNavbar(PaymentStatus);
