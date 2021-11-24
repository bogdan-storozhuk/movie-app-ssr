import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Title from '../Title';

import styles from './searchForm.css';

const SearchForm = ({ search, location }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(search);
  }, [search]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.HeaderBottomPanel}>
      <Title>FIND YOUR MOVIE</Title>
      <div className="search">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          className={styles.searchTerm}
          placeholder="What do you want to watch?"
        />
        <Link
          className={styles.searchButton}
          to={{
            pathname: `/search/${value}`,
            search: location.search,
          }}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  search: PropTypes.string,
};

export default withRouter(SearchForm);
