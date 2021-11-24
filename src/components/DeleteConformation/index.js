import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import { deleteMovieStart } from "../../reducers/movies/actions";

import styles from "./deleteConformation.css";

const DeleteConformation = ({ id, deleteMovieStart }) => {
  const handleDelete = () => {
    deleteMovieStart(id);
  };
  return (
    <Fragment>
      <p className={styles.DeleteConformationMessage}>
        Are you sure you want to delete this movie?
      </p>
      <div className={styles.DeleteConformationButtonWrapper}>
        <Button
          onClick={handleDelete}
          className={styles.DeleteConformationButton}
        >
          Confirm
        </Button>
      </div>
    </Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    deleteMovieStart: id => dispatch(deleteMovieStart(id))
  };
}

DeleteConformation.propTypes = {
  id: PropTypes.number,
  deleteMovieStart: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteConformation);
