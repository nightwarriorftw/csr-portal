import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)",
  },
  form: {
    textAlign: "center",
  },
};

export default class Register extends PureComponent {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    console.log(this.state);
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, email, password, password2 } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form style={styles.form} onSubmit={this.handleOnSubmit}>
                <div className="fh5co-heading">
                  <h2>Register</h2>
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                    required
                  />
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    required
                  />
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    required
                  />
                </div>

                <div className="form-group row">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                    required
                  />
                </div>

                <button type="submit">Register</button>

                <p> Already have an account ? <Link to='/login'>Login</Link></p>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
