import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/events";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "../layouts/Card";
import { Link } from "react-router-dom";

class Events extends PureComponent {
  static propTypes = {
    events: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        <div id="fh5co-services" className="fh5co-bg-section border-bottom">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-8 col-md-offset-2 text-left">
                <div className="fh5co-heading">
                  <ScrollAnimation animateIn="fadeIn">
                    <h2>Events</h2>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
            <ScrollAnimation animateIn="fadeIn">
              <div className="row">
                {/* Row1 */}
                {this.props.events.map((event) => (
                  <Link to={`events/${event.slug}`} key={event.slug}>
                    <Card
                      key={event.id}
                      name={event.title}
                      image={event.image}
                      company={event.company}
                      date={event.dateOfEvent}
                    />
                  </Link>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
