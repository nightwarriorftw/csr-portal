import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('http://localhost:8000/api/leads/')
    .then(res=>{
        dispatch({
            type: GET_LEADS,
            payload: res.data
        })
    }).catch(err => {
        const error = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: error
        })
    });
};

// DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios.get(`http://localhost:8000/api/leads/${id}`)
    .then(res=>{
        dispatch({
            type: DELETE_LEAD,
            payload: res.data
        })
    }).catch(err => console.error(err));
};

// ADD LEAD
export const addLead = (formData) => dispatch => {
    axios.post('http://localhost:8000/api/leads/', formData)
    .then(res=>{
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        })
            
    })
    .catch(err => {
        const error = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: error
        })
    }
    );
};
