import axios from 'axios';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    GET_ERRORS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types';


// Checking token and Load user
export const loadUser = () => (dispatch, getState) => {
    // Loading User
    dispatch({
        type: USER_LOADING
    })

    // Get token from state
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token!==null) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('http://localhost:8000/accounts/api/v1/user/', config)
    .then(res=>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch( (err)=>{
        const error = {
            msg: err.response.data,
            status: err.response.status          
        }

        dispatch({
            type: GET_ERRORS,
            payload: error
        })

        dispatch({
            type: AUTH_ERROR
        })
    })
}


// Login
export const login = (username, password) => dispatch => {
    username = username[0];
    password = password[0];
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({username, password});
    axios.post('http://localhost:8000/accounts/api/v1/login/', body, config)
    .then(res=>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch( (err)=>{
        const error = {
            msg: err.response.data,
            status: err.response.status          
        }

        dispatch({
            type: GET_ERRORS,
            payload: error
        })

        dispatch({
            type: LOGIN_FAIL
        })
    })
}

// Register
export const register = (username, email, password) => dispatch => {
    console.log(username, email, password);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({username, password, email});
    axios.post('http://localhost:8000/accounts/api/v1/register/', body, config)
    .then(res=>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch( (err)=>{
        const error = {
            msg: err.response.data,
            status: err.response.status          
        }

        dispatch({
            type: GET_ERRORS,
            payload: error
        })

        dispatch({
            type: REGISTER_FAIL
        })
    })
}

// Logout
export const logout = () => (dispatch, getState) => {
    // Loading User
    dispatch({
        type: USER_LOADING
    })

    // Get token from state
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token!==null) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.post('http://localhost:8000/accounts/api/v1/logout/', null, config)
    .then(res=>{
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    })
    .catch( (err)=>{
        const error = {
            msg: err.response.data,
            status: err.response.status          
        }

        dispatch({
            type: GET_ERRORS,
            payload: error
        })
    })
}