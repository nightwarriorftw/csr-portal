import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads'

class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h1>CSR portal</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message} </td>
                            <td><button className="btn btn-danger btn-sm" onClick={this.props.deleteLead.bind(this, lead.id)}>Delete</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </Fragment>
        )
    }
}

// map state to props is used so that we can call
// this.props.leads
// state.leads is the leads reducer in combine reducer
// object and afterwards leads is the initial state defined in the leads reducer
const mapStateToProps = (state) => ({
    leads: state.leads.leads
})

// traditional way. With this objects we can now access this.props.getLeads
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
