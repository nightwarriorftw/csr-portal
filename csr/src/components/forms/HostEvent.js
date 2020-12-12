import React, { useState } from "react";
import axios from "axios";

const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)",
  },
  form: {
    textAlign: "center",
  },
};
const HostEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    company: "",
    host: "",
    firstLine: "",
    secondLine: "",
    city: "",
    country: "",
    dateOfEvent: new Date(),
    eventImage: null,
    category: "",
  });

  const reset = () => {
    setEvent({
      title: "",
      description: "",
      company: "",
      host: "",
      firstLine: "",
      secondLine: "",
      city: "",
      country: "",
      dateOfEvent: new Date(),
      eventImage: "",
      category: "",
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", event.title);
    formData.append("description", event.description);
    formData.append("company", event.company);
    formData.append("hostName", event.host);
    formData.append("firstLine", event.firstLine);
    formData.append("secondLine", event.secondLine);
    formData.append("city", event.city);
    formData.append("country", event.country);
    formData.append("date_of_event", event.dateOfEvent);
    formData.append("image", event.eventImage, event.eventImage.name);
    formData.append("category", event.category);

    axios
      .post("http://localhost:8000/events/api/v1/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Token fcd37ea1fc40477a228b05006eefa2bffd2d00c753fa76b19838fa7f81f87e4e",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDropDown = (e) => {
    const category_name = e.target.value;
    setEvent((prevState) => ({
      ...prevState,
      category: category_name,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setEvent((prevState) => ({
      ...prevState,
      eventImage: file,
    }));
  };

  return (
    <div style={{ padding: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form style={styles.form} onSubmit={handleOnSubmit}>
              <div className="fh5co-heading">
                <h2>Host Event</h2>
              </div>
              <div className="form-group row">
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={event.title}
                  required
                />
              </div>
              <div className="form-group row">
                <textarea
                  className="input"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={event.description}
                  required
                ></textarea>
              </div>
              <div className="form-group row">
                <input
                  className="input"
                  type="text"
                  placeholder="CompanyName"
                  name="company"
                  onChange={handleChange}
                  value={event.company}
                  required
                />
              </div>
              <div className="form-group row">
                <input
                  className="input"
                  type="text"
                  placeholder="HostName"
                  name="host"
                  onChange={handleChange}
                  value={event.host}
                  required
                />
              </div>

              <div className="form-group row">
                <label>
                  Address:
                  <input
                    className="input"
                    type="text"
                    placeholder="First Line"
                    name="firstLine"
                    onChange={handleChange}
                    value={event.firstLine}
                    required
                  />
                  <input
                    className="input"
                    type="text"
                    placeholder="Second Line"
                    name="secondLine"
                    onChange={handleChange}
                    value={event.secondLine}
                  />
                  <input
                    className="input"
                    type="text"
                    placeholder="city"
                    name="city"
                    onChange={handleChange}
                    value={event.city}
                    required
                  />
                  <input
                    className="input"
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={handleChange}
                    value={event.country}
                    required
                  />
                </label>
              </div>

              <div className="form-group row">
                <input
                  className="input"
                  type="date"
                  placeholder="Date of Event"
                  name="dateOfEvent"
                  onChange={handleChange}
                  value={event.dateOfEvent}
                  required
                />
              </div>

              <div className="form-group row">
                <label>
                  Event Image:
                  <input
                    className="input"
                    type="file"
                    name="eventImage"
                    placeholder="Image"
                    accept="image/png"
                    onChange={handleImage}
                    required
                  />
                </label>
              </div>

              <div className="form-group row">
                <select
                  name={event.category}
                  onChange={handleDropDown}
                  value={event.category}
                  required
                >
                  <option className="form-group">Category</option>
                  <option value="health">health</option>
                  <option value="armed_forces">armed_forces</option>
                  <option value="education">education</option>
                  <option value="environment">environment</option>
                  <option value="gender_equality">gender_equality</option>
                  <option value="heritage">heritage</option>
                  <option value="relief_fund">relief_fund</option>
                  <option value="rural_development">rural_development</option>
                  <option value="slum_area_development">
                    slum_area_development
                  </option>
                </select>
              </div>
              <div className="form-group row">
                <button className="submit-btn" type="submit">
                  Host
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostEvent;
