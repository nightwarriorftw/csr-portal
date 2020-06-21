import React, { Component } from 'react'
import { withAlert } from 'react-alert';

class Alerts extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }
    componentDidMount() {
        this.props.alert.show('Hello');
    }
    render() {
        return (
            <div red={this.wrapper}>
            </div>
        )
    }
}

export default withAlert()(Alerts);