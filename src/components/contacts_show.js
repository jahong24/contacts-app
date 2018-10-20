import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchContact } from "../actions";

class ContactsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchContact(id);
  }

  render() {
    const { contact } = this.props;

    if (!contact) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h1>{contact.name}</h1>
        <img src="https://picsum.photos/200?random" />
        <hr />
        <h5>
          {contact.address.street}, {contact.address.city},{" "}
          {contact.address.zipcode}
        </h5>
        <h6>Phone: {contact.phone}</h6>
        <h6>Email: {contact.email}</h6>
        <h6>Website: {contact.website}</h6>
        <h6>Company: {contact.company.name}</h6>
      </div>
    );
  }
}

function mapStateToProps({ contacts }, ownProps) {
  return { contact: contacts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchContact }
)(ContactsShow);
