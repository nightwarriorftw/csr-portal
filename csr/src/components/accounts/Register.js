import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes  = {
        isAuthenticated: PropTypes.bool
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        console.log(username[0], email[0], password[0], password2[0]);
        if (password[0]!==password2[0]) {
            console.log('error');
        } else {
            this.props.register(username[0], email[0], password[0]);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    render() {
        const { username, email, password, password2 } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <h2>Registration Form</h2>
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" name="username" value={username} required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" name="email" value={email} required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" value={password} required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password2" value={password2} required onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);