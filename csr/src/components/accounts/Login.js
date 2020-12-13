import React, { PureComponent } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)",
  },
  form: {
    textAlign: "center",
  },
};

class Login extends PureComponent {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
    console.log(this.state);
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form style={styles.form} onSubmit={this.handleOnSubmit}>
                <div className="fh5co-heading">
                  <h2>Login</h2>
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
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    required
                  />
                </div>

                <button type="submit">Login</button>

                <p>
                  {" "}
                  Don't have an account ? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
