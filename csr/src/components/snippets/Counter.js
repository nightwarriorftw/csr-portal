import React, { PureComponent } from "react";

const counterBackgroundStyle = {
  background: "url(" + process.env.PUBLIC_URL + "images/bg-img.jpg)",
};

export default class Counter extends PureComponent {
  componentDidMount() {
    // Make api call here and get the count of companies, projects and sectors

    let count = 0;
    let updateCounter = setInterval(() => {
      updater();
      count++;

      if (count === 30) {
        stopCounter();
      }
    }, 50);

    let stopCounter = () => {
      clearInterval(updateCounter);
    };

    let c1 = 0,
      c2 = 0;
    let updater = () => {
      if (c1 < 20) {
        c1++;
        document.getElementById("companies").innerHTML =
          c1.toString() + ` <span> Total Companies<br>Registered</span>`;
      }
      if (c2 < 10) {
        c2++;
        document.getElementById("events").innerHTML =
          c2.toString() + ` <span> Total Events<br>Hosted</span>`;
      }
    };
  }

  render() {
    return (
      <div>
        <section className="bg-img pt70 pb70" style={counterBackgroundStyle}>
          <div className="overlay_dark"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="countdown" id="counter">
                  <div id="companies">
                    00 <span>Total Companies</span>
                  </div>
                  <div id="events">
                    00 <span>Total Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
