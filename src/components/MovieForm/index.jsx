import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { postMovieStart, editMovieStart } from "../../reducers/movies/actions";

import { formFields } from "../../assets/constants";

import MovieFormField from "../movieFormField";

import styles from "./movieForm.css";

const MovieForm = ({
  closeMovieModal,
  postMovieStart,
  editMovieStart,
  selectedMovie,
}) => {
  return (
    <Formik
      initialValues={
        selectedMovie
          ? selectedMovie
          : {
              title: "",
              releaseDate: "",
              posterPath: "",
              voteAverage: 0,
              genres: [],
              runtime: 0,
              overview: "",
            }
      }
      validate={(values) => {
        const errors = {};
        formFields.forEach((field) => {
          const { name } = field;
          if (!values[name]) {
            errors[name] = "Required";
          }
        });
        if (!values["overview"]) {
          errors["overview"] = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (selectedMovie) {
          editMovieStart(values);
        } else {
          postMovieStart(values);
        }
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => {
        return (
          <form className={styles.MovieForm} onSubmit={handleSubmit}>
            <div className={styles.MovieFormMovieFormFields}>
              {formFields.map(({ name, text, id }) => (
                <MovieFormField
                  key={id}
                  handleChange={
                    name === "genres" ? setFieldValue : handleChange
                  }
                  handleBlur={handleBlur}
                  name={name}
                  value={values[name]}
                  text={text}
                  errors={errors}
                  touched={touched}
                />
              ))}
            </div>
            <MovieFormField
              handleChange={handleChange}
              handleBlur={handleBlur}
              name="overview"
              value={values["overview"]}
              text={"OVERVIEW"}
              errors={errors}
              touched={touched}
            />
            <div className={styles.MovieFormControls}>
              <Button
                className={styles.MovieFormControlsSubmit}
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                SUBMIT
              </Button>
              <Button
                className={styles.MovieFormControlsReset}
                variant="secondary"
                onClick={closeMovieModal}
              >
                RESET
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    postMovieStart: (movie) => dispatch(postMovieStart(movie)),
    editMovieStart: (movie) => dispatch(editMovieStart(movie)),
  };
}

MovieForm.propTypes = {
  closeMovieModal: PropTypes.func,
  postMovieStart: PropTypes.func,
  editMovieStart: PropTypes.func,
  selectedMovie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
    ),
    id: PropTypes.number,
    overview: PropTypes.string,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
  }),
};

export default connect(null, mapDispatchToProps)(MovieForm);
