import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    render() {
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
