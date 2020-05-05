import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class NavBar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    handleLogout = () => {
        console.log('logout');
        this.props.logout();        
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li>
                    <button className="btn btn-danger btn-sm text-light" onClick={this.handleLogout}>Logout</button>
                </li>
            </ul>
        );

        const guestLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Home<span className="sr-only">(current)</span></Link>
                </li>
                                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">CSR Portal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {isAuthenticated ? authLink : guestLink}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(NavBar);