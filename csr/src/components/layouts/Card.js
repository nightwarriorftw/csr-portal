import React, { PureComponent } from 'react'


export default class Card extends PureComponent {


    render() {
        const header_image = {
            height: "150px",
            width: "100%",
            borderRadius: "20px",
            backgroundImage: `url("${this.props.image}")`,
            backgroundSize: "cover",
        };
        return (
            <div>

                        <div className="col-md-4 col-sm-6 ">
                            <div className="feature-center">
                                <div style={header_image}>

                                </div>
                                <div>
                                    <h2>{this.props.name}</h2>
                                    <p>{this.props.company}</p>
                                    <p style={{fontSize: '12px'}}>{this.props.date}</p>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}
