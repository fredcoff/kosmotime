import React, { Component } from "react";

import {
  validateName,
  validateEmail,
  validatePhone,
  validateUrl,
} from "../utils";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      blogUrl: "",
    };
  }

  handleTextChange = (id, val) => {
    this.setState({
      [id]: val,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { fullName, email, phone, blogUrl } = this.state;

    if (
      validateName(fullName) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      validateUrl(blogUrl)
    ) {
      this.props.isFormValid(true);
    } else {
      this.props.isFormValid(false);
    }
  };

  render() {
    const { fullName, email, phone, blogUrl } = this.state;
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>Name:</h3>
          <input
            type="text"
            className="name"
            value={fullName}
            onChange={(evt) =>
              this.handleTextChange("fullName", evt.target.value)
            }
          />
          <h3>Email:</h3>
          <input
            type="text"
            className="email"
            value={email}
            onChange={(evt) => this.handleTextChange("email", evt.target.value)}
          />
          <h3>Phone:</h3>
          <input
            type="text"
            className="phone"
            value={phone}
            onChange={(evt) => this.handleTextChange("phone", evt.target.value)}
          />
          <h3>Blog URL:</h3>
          <input
            type="text"
            className="url"
            value={blogUrl}
            onChange={(evt) =>
              this.handleTextChange("blogUrl", evt.target.value)
            }
          />
          <div className="small-6 small-centered text-center columns">
            <a
              href="#"
              className="button success expand round text-center"
              onClick={this.handleSubmit}
            >
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
