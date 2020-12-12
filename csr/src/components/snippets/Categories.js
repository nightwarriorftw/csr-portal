import React, { PureComponent } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import Card from '../layouts/SkillSetCard';
// import ImageCard from '../layouts/ImageCard';

export default class SkillSet extends PureComponent {
  render() {
    return (
      <div>
        <div id="fh5co-project" className="fh5co-bg-section border-bottom">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-8 col-md-offset-2 text-left">
                <div className="fh5co-heading">
                  <ScrollAnimation animateIn="flipInX">
                    <h2>Categories</h2>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
            {/* Skill Logos */}

            {/* Row1 */}
            <ScrollAnimation animateIn="fadeIn">
              <div className="row"></div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
