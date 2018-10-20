import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchContacts } from "../actions";
import _ from "lodash";

class ContactsIndex extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  renderContacts() {
    return _.map(this.props.contacts, contact => {
      return (
        <li
          className="list-group-item list-group-item-action list-group-item-light"
          key={contact.id}
        >
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Contacts</h1>
        <ul className="list-group">{this.renderContacts()}</ul>
        <Link className="btn btn-primary mt-3" to="/contacts/new">
          Add Contact
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { contacts: state.contacts };
}

export default connect(
  mapStateToProps,
  { fetchContacts }
)(ContactsIndex);
