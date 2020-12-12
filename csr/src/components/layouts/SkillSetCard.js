import React, { PureComponent } from "react";

export default class Card extends PureComponent {
  render() {
    const imageSrc = `https://cdn.jsdelivr.net/npm/programming-languages-logos/src/${this.props.name}/${this.props.name}.png`;
    console.log(imageSrc);
    return (
      <div>
        <div className="col-md-4 col-sm-6 ">
          <div className="feature-skill">
            <div>
              <img src={imageSrc} height="100" alt={`${this.props.name}`} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
