import React from 'react';
import PropTypes from 'prop-types';

import SearchImage from '../../assets/img/search.svg';

import styles from './backButton.css';

const BackButton = ({ resetMovie }) => (
  <button className={styles.SearchButton} onClick={() => resetMovie()}>
    <div className={styles.SearchButtonIcon}>
      <SearchImage />
    </div>
  </button>
);

BackButton.propTypes = {
  resetMovie: PropTypes.func,
};

export default BackButton;
