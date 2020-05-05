import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';


export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <h2>Login Form</h2>
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" name="username" value={username} required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" value={password} required onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
