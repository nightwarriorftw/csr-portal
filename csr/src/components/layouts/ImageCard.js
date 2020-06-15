import React, { PureComponent } from 'react'

const imageStyle = {
    borderRadius: '20px',
}

export default class ImageCard extends PureComponent {
    
    render() {
        const URL = process.env.PUBLIC_URL + 'images/skills/';
        return (
            <div>
                <div className="col-md-4 col-sm-6 ">
                    <div className='feature-skill'>
                        <div>
                            <img src={`${URL}/${this.props.name}.png`} style={imageStyle} alt='django' height='100' width='150'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
