import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    static propsType = {
        addLead: PropTypes.func.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, email, message} = this.state;
        console.log(name, email, message);
        const formData = {name, email, message};
        this.props.addLead(formData);
    }

    render() {
        const {name, email, message} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Details</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="message"
                            value={message}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

// Kept mapStateToProps to null because we don't need to bring
// data back 
export default connect(null, { addLead })(Form);
