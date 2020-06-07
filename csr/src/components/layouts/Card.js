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
        console.log(header_image.backgroundImage);
        return (
            <div>

                    <a href={this.props.link}>
                        <div className="col-md-4 col-sm-6 ">
                            <div className="feature-center">
                                <div style={header_image}>

                                </div>
                                <div>
                                    <h3>{this.props.name}</h3>
                                    <p>{this.props.company}</p>
                                </div>
                            </div>
                        </div>
                    </a>

            </div>
        )
    }
}
