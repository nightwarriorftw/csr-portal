import React, { PureComponent } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends PureComponent {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      alert.error("There is an error");

      // error handling for different cases

    }
    // messages

    if(message !== prevProps.message){
        if(message.getEvents) alert.success(message.getEvents);
    }
    
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
