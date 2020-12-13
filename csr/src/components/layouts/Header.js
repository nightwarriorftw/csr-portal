import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {logout} from '../../actions/auth';
import auth from "../../reducers/auth";

const imageStyle = {
  marginLeft: "100px",
};

class Header extends PureComponent {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );

    const authLinks = (
      <ul>
        <li>
          <span className="nav-link test-light">Welcome {user ? user.username : ''}</span>
        </li>
        <li className="nav-item">
          <button style={{width: "75px"}} className="nav-link test-light btn-sm" onClick={this.props.logout}>Logout</button>
        </li>
      </ul>
    );
    return (
      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-2 text-left">
                <div id="fh5co-logo" style={imageStyle}>
                  <a href="/">
                    <img
                      src={process.env.PUBLIC_URL + "/images/satya.png"}
                      alt="logo"
                    />
                  </a>
                  <br />
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#fh5co-services">Upcoming Events</a>
                  </li>
                  <li>
                    <a href="#fh5co-project">Categories</a>
                  </li>
                  {isAuthenticated ? (
                    authLinks
                  ) : (
                    guestLinks
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
