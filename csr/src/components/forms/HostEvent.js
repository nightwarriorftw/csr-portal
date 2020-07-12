import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEvents } from "../../actions/events";

const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)",
  },
  form: {
    textAlign: "center",
  },
};

class HostEvent extends PureComponent {
  state = {
    title: "",
    description: "",
    image: "",
    company: "",
    hostName: "",
    addressFirstLine: "",
    addressSecondLine: "",
    city: "",
    country: "",
    date: "",
  };

  static propTypes = {
    addEvents: PropTypes.func.isRequired,
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const { title, description, image, company } = this.state;
    console.log(title, description, image, company);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      title,
      description,
      image,
      company,
      hostName,
      addressFirstLine,
      addressSecondLine,
      city,
      country,
      date,
    } = this.state;
    return (
      <div style={{ padding: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form style={styles.form} onSubmit={this.handleOnSubmit}>
                <div className="fh5co-heading">
                  <h2>Host Event</h2>
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={this.onChange}
                    value={title}
                  />
                </div>

                <div className="form-group row">
                  <textarea
                    className="input"
                    placeholder="Description"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  ></textarea>
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="text"
                    placeholder="CompanyName"
                    onChange={this.onChange}
                    name="company"
                    value={company}
                  />
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="text"
                    placeholder="HostName"
                    onChange={this.onChange}
                    name="hostName"
                    value={hostName}
                  />
                </div>

                <div className="form-group row">
                  <label>
                    Address:
                    <input
                      className="input"
                      type="text"
                      placeholder="First Line"
                      onChange={this.onChange}
                      name="addressFirstLine"
                      value={addressFirstLine}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="Second Line"
                      onChange={this.onChange}
                      name="addressSecondLine"
                      value={addressSecondLine}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={this.onChange}
                      value={city}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="Country"
                      name="country"
                      onChange={this.onChange}
                      value={country}
                    />
                  </label>
                </div>
                <div className="form-group row">
                  <label>
                    Event Image:
                    <input
                      className="input"
                      type="file"
                      placeholder="Image"
                      name="image"
                      onChange={this.onChange}
                      value={image}
                    />
                  </label>
                </div>

                <div className="form-group row">
                  <select>
                    <option className="form-group">Category</option>
                    <option
                      name="category"
                      value="HEALTH"
                      onChange={this.onChange}
                    >
                      HEALTH
                    </option>
                    <option
                      name="category"
                      value="ARMED_FORCES"
                      onChange={this.onChange}
                    >
                      ARMED_FORCES
                    </option>
                    <option
                      name="category"
                      value="EDUCATION"
                      onChange={this.onChange}
                    >
                      EDUCATION
                    </option>
                    <option
                      name="category"
                      value="ENVIRONMENT"
                      onChange={this.onChange}
                    >
                      ENVIRONMENT
                    </option>
                    <option
                      name="category"
                      value="GENDER_EQUALITY"
                      onChange={this.onChange}
                    >
                      GENDER_EQUALITY
                    </option>
                    <option
                      name="category"
                      value="HERITAGE"
                      onChange={this.onChange}
                    >
                      HERITAGE
                    </option>
                    <option
                      name="category"
                      value="RELIEF_FUND"
                      onChange={this.onChange}
                    >
                      RELIEF_FUND
                    </option>
                    <option
                      name="category"
                      value="RURAL_DEVELOPMENT"
                      onChange={this.onChange}
                    >
                      RURAL_DEVELOPMENT
                    </option>
                    <option
                      name="category"
                      value="SLUM_AREA_DEVELOPMENT"
                      onChange={this.onChange}
                    >
                      SLUM_AREA_DEVELOPMENT
                    </option>
                  </select>
                  <br />
                  <label>
                    Date of Event
                    <input
                      type="date"
                      value={date}
                      name="date"
                      onChange={this.onChange}
                    />
                  </label>
                </div>
                <div className="form-group row">
                  <button className="submit-btn" type="submit">
                    Host Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addEvents })(HostEvent);
