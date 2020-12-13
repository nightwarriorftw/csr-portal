import React, { PureComponent } from "react";
import { withAlert } from "react-alert";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends PureComponent {
    static propTypes = {
        error: PropTypes.object.isRequired
    }


  componentDidUpdate(prevProps) {
      const { error, alert } = this.prevProps;


      if(error !== prevProps.error){
          alert.error("There is an error");

          // error handling for different cases
      }
  }

  render() {
    return <div></div>;
  }
}


const mapStateToProps = (state) => ({
    error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));

