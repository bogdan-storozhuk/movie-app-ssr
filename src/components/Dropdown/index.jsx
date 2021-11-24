import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { sortByList } from '../../assets/constants';
import { sortBySelector } from '../../reducers/movies/selectors';

import { modifyQueryParamInSearch } from '../../utils';

import styles from './dropdown.css';

const DropDown = ({ sortBy, location: { search, pathname }, history }) => {
  const handleSelectSortBy = (e) => {
    const newSearch = modifyQueryParamInSearch(
      search,
      'sortBy',
      e.target.value,
    );
    history.push({
      pathname,
      search: `?${newSearch}`,
    });
  };

  return (
    <div className={styles.DropDown}>
      <label className={styles.DropDownLabel} htmlFor="SortSelect">
        SORT BY
      </label>
      <div className={styles.DropDownSelectBox}>
        <select
          value={sortBy}
          onChange={handleSelectSortBy}
          className={styles.DropDownSelect}
          id="SortSelect"
        >
          {sortByList.map(({ value, message, id }) => (
            <option key={id} value={value}>
              {message}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sortBy: sortBySelector,
});

DropDown.propTypes = {
  sortBy: PropTypes.string,
};

export default connect(mapStateToProps)(withRouter(DropDown));
