import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const testimonials = this.props.data.testimonials.map((testimonial) => (
      <li key={testimonial.user}>
        <blockquote>
          <p>{testimonial.text}</p>
          <cite>{testimonial.user}</cite>
        </blockquote>
      </li>
    ));

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                {testimonials.length > 0 ? (
                  <ul className="slides">{testimonials}</ul>
                ) : (
                  <p>No testimonials available at the moment.</p>
                )}

              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
