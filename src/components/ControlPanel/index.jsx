import React from 'react';

import GenreToggle from '../GenreToggle';
import DropDown from '../Dropdown';

import styles from './controlPanel.css';

const ControlPanel = () => (
  <div className={styles.ControlPanel}>
    <GenreToggle />
    <DropDown />
  </div>
);

export default ControlPanel;
