import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alert extends Component {
    static propsTypes = {
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const {error, alert } = this.props;
        if(error !== prevProps.error){
            if(error.msg.name){
                alert.error(`Name: ${error.msg.name.join()}`);
            }
            if(error.msg.email){
                alert.error(`Email: ${error.msg.email.join()}`);
            }
            if(error.msg.message){
                alert.error(`Message: ${error.msg.message.join()}`);
            }

            if(error.msg.non_field_errors){
                alert.error(`${error.msg.non_field_errors.join()}`);
            }
        } else {
            alert.success('Details Added');
        }
    }
    render() {
        return(
            <Fragment />
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alert));
