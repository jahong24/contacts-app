import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class ContactsNew extends Component {
  renderField(field) {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            {field.label}
          </span>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder={field.label}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Link to="/">Back to Index</Link>
          <h3>Add a New Post</h3>
        </div>
        <Field label="User Id" name="userId" component={this.renderField} />
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Body" name="body" component={this.renderField} />
        <div>
          <button
            className="btn btn-primary mr-3"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(ContactsNew)
);
