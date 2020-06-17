import React, { PureComponent } from "react";
// import { Link } from 'react-router-dom';

const imageStyle = {
  marginLeft: '100px',
}

export default class Header extends PureComponent {


  render() {
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
                    <br/>
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href="#fh5co-services">Upcoming Events</a>
                  </li>
                  <li>
                    <a href="#fh5co-project">Categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
