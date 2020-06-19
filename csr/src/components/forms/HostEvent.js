import React, { PureComponent } from 'react'

const styles = {
    facebookBtn: {
        backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
        textAlign: 'center'
    }
}

export default class HostEvent extends PureComponent {
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }
    render() {
        return (
            <div style={{'padding':'50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form style={styles.form} onSubmit={this.handleOnSubmit}>
                                <div className="fh5co-heading">
                                    <h2>Host Event</h2>
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='Title' />
                                </div>
                                <div className='form-group row'>
                                    <textarea className='input' placeholder='Description' ></textarea>
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='CompanyName' />
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='HostName' />
                                </div>
                                <div className='form-group row'>
                                    <label>
                                        Address:
                                        <input className='input' type='text' placeholder='First Line' />
                                        <input className='input' type='text' placeholder='Second Line' />
                                        <input className='input' type='text' placeholder='City' />
                                        <input className='input' type='text' placeholder='Country' />
                                    </label>
                                    
                                </div>
                                <div className='form-group row'>
                                    <label>
                                        Event Image:
                                        <input className='input' type='file' placeholder='Image' />
                                    </label>
                                </div>

                                <div className="form-group row">
                                    <select>
                                        <option className="form-group">Category</option>
                                        <option>HEALTH</option>
                                        <option>ARMED_FORCES</option>
                                        <option>EDUCATION</option>
                                        <option>ENVIRONMENT</option>
                                        <option>GENDER_EQUALITY</option>
                                        <option>HERITAGE</option>
                                        <option>RELIEF_FUND</option>
                                        <option>RURAL_DEVELOPMENT</option>
                                        <option>SLUM_AREA_DEVELOPMENT</option>
                                    </select>
                                </div>
                                <div className='form-group row'>
                                    <button className='submit-btn' type='submit'>Log In</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

