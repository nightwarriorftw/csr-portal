import React from 'react'
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <ul>
            <li onClick={()=>props.display_form('login')}>Login</li>
            <li onClick={()=>props.display_form('signup')}>SignUp</li>
        </ul>
    );

    const logged_in_nav = (
        <ul>
            <li onClick={props.handleLogout}>Logout</li>
        </ul>
    );

    return (
        <div>
                {props.loggedIn ? logged_in_nav : logged_out_nav}            
        </div>
    )
}
export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
};
