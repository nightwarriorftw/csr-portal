import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Axios from 'axios';


function EventDetails() {
    const { id } = useParams();
    const [eventDetails, setEventDetails] = useState([{}])

    useEffect(() => {
        Axios.get(`http://localhost:8000/events/api/v1/${id}`)
            .then(res => {
                setEventDetails(res.data);
            })
    }, [setEventDetails, id])

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className="col-6" style={{ textAlign: 'center', marginRight: '40px' }}>
                    <Link to='/'><i className="fa fa-arrow-circle-left" aria-hidden="true" style={{fontSize:'48px'}}></i></Link>
                </div>
                <div className="col-6" >
                    <Link to={`/events/${eventDetails.slug}`}><h1 style={{ textAlign: 'center'}}>{eventDetails.title}</h1></Link>
                </div>
            </div>
            <div className="card">
                <img src={eventDetails.image} alt={eventDetails.title} style={{width: '300px'}}/>
                <h3>{eventDetails.company}</h3>
                <Link to={`/events/${eventDetails.slug}`}>
                    <h2 className="title" style={{ color: 'black', fontWeight: 'bolder' }}>{eventDetails.title}</h2>
                </Link>
                <p><span style={{ color: 'black' }}>HostName: </span>{eventDetails.hostName}</p>
                <div><span style={{ color: 'black' }}>Address: </span>{eventDetails.address}</div>
                <div><span style={{ color: 'black' }}>Date: </span>{eventDetails.dateOfEvent}</div>                <p><button>Donate More</button></p>
            </div>
            <div className="container">
                <strong>Descrpition:</strong>
                    {eventDetails.description}
            </div>
        </div>
    )
}

export default EventDetails

