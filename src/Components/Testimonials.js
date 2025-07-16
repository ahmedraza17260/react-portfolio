import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Testimonials extends Component {
  render() {
    const { testimonials } = this.props.data || {};

    if (!testimonials) return null;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    };

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="twelve columns">
              <h1>Client Testimonials</h1>
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-slide">
                    <blockquote>
                      <p>{testimonial.text}</p>
                      <cite>{testimonial.user}</cite>
                    </blockquote>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
