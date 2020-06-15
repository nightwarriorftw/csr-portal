import React, { PureComponent } from 'react'


export default class Footer extends PureComponent {
    render() {
        return (
            <div>
                <div id="footer">
                    <div className="flex-container">
                        <div className="about">
                            <h3>CSR Portal</h3>
                            <p>Help to Grow India</p>
                            <div className="social-buttons">
                                <ul>
                                    <li className="item"><a href="https://www.facebook.com/indiancsr/" ><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="item"><a href="https://twitter.com/INDIACSR" ><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="links">
                            <h3>USEFUL LINKS </h3>
                            <ul>
                                <li><a href="https://csrrajasthangov.in/" >CSR Rajasthan</a></li>
                                <li><a href="https://csr.odisha.gov.in/" >CSR Odisha</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
