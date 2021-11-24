import React from 'react';
import PropTypes from 'prop-types';

import styles from './title.css';

const Title = ({ children }) => <h1 className={styles.Title}>{children}</h1>;

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
