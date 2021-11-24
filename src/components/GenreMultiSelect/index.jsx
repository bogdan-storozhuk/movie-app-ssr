import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import PropTypes from 'prop-types';

import { getGenreList } from '../../utils';

import styles from './genreMultiSelect.css';

const GenreMultiSelect = ({
  handleChange, handleBlur, name, value,
}) => {
  const handleChangeGenre = (genres) => {
    handleChange(name, genres);
  };
  return (
    <div className={styles.GenreMultiSelect}>
      <Multiselect
        options={getGenreList()}
        displayValue="name"
        showCheckbox
        selectedValues={value}
        onSelect={handleChangeGenre}
        onRemove={handleChangeGenre}
        onBlur={handleBlur}
        placeholder="Select Genre"
        showArrow
        name={name}
      />
    </div>
  );
};

GenreMultiSelect.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })),
};

export default GenreMultiSelect;
